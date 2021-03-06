import { Component, ViewChild, Inject } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';
import { Deploy } from "@ionic/cloud-angular";

import { OT_GV, IGV } from './../globalVar/gv';
import { GF } from './../globalFunc/gf';
import { AppItem } from "./../models/appItem/AppItem";
import { HomePage } from '../pages/home/home';
import { SupportPage } from '../pages/support/support';
import { GenInfoList } from "../pages/genInfoList/genInfoList";
import { GenAppList } from "../pages/genAppList/genAppList";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make home the root (or first) page
  rootPage: any = HomePage;

  public updateFlag: boolean;

  constructor(
    @Inject(OT_GV) public IGV: IGV,
    public deploy: Deploy,
    public alertCtrl: AlertController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public platform: Platform,
    public menu: MenuController,
    public translate: TranslateService,
    public storage: Storage,
    public globalFunc: GF,
    public network: Network
  ) {
    this.initializeApp(translate);
  }

  initializeApp(translate) {
    // this.updateFlag = false;
    this.globalFunc.loadingPresent();

    this.IGV.myAppItemMap = new Map<string, AppItem>();

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();

      this.IGV.isIOS = this.platform.is('ios');
      this.IGV.isAndroid = this.platform.is('android');

      // default language to en
      this.translate.use('en');
      this.IGV.gLangInd = 'en';

      // For local storage
      this.storage.ready().then(() => {

        // Get mySetting
        this.storage.get('mySetting').then((val) => {
          if (val !== null) {
            if (val.langInd !== 'en' && val.langInd !== 'cn' && val.langInd !== 'zh') {
              // default language to en
              this.translate.use('en');
              this.IGV.gLangInd = 'en';
            } else {
              this.translate.use(val.langInd);
              this.IGV.gLangInd = val.langInd;
            }
          } else {
            this.showLangChoose();
          }
        });

        // Get myAppItemList
        this.storage.get('myFavourite').then((val) => {
          if (val !== null) {
            this.IGV.myAppItemList = val.myappItemList as AppItem[];
            for (let myAppItem of this.IGV.myAppItemList) {
              this.IGV.myAppItemMap.set(myAppItem.id, myAppItem);
            }
          }
          this.globalFunc.loadingDismiss();
        });

        // watch network for a disconnect
        this.network.onDisconnect().subscribe(() => {
          this.globalFunc.showToastNoNetwork();
        });

        // check update
        this.deploy.channel = this.IGV.DEPLOY_CHANNEL;

        this.deploy.check().then((snapshotAvailable: boolean) => {
          if (snapshotAvailable) {
            this.IGV.isUpdatable = true;
          } else {
            this.IGV.isUpdatable = false;
          }
        });

      }, (error) => {
        this.globalFunc.presentSysErr();
        this.globalFunc.loadingDismiss();
      });

      // For adMob
      this.globalFunc.initAds();

    });
  }

  menuClosed() {
    //code to execute when menu has closed
  }

  menuOpened() {
    //code to execute when menu ha opened
    this.globalFunc.removeBanner();
  }

  openPage(page, pageInd) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.globalFunc.showInterstitial();
    // navigate to the new page if it is not the current page
    let toPage: any;
    switch (page) {
      case 'HomePage': {
        toPage = HomePage;
        break;
      }
      case 'GenAppList': {
        toPage = GenAppList;
        this.IGV.gPageInd = pageInd;
        break;
      }
      case 'GenInfoList': {
        toPage = GenInfoList;
        this.IGV.gPageInd = pageInd;
        break;
      }
      case 'SupportPage': {
        toPage = SupportPage;
        break;
      }
      default: {
        toPage = HomePage;
        break;
      }
    }
    this.nav.setRoot(toPage);
  }

  // -------------  Ionic deploy -------------//
  updateApp() {

    this.globalFunc.loadingPresent();
    this.deploy.channel = this.IGV.DEPLOY_CHANNEL;

    this.deploy.check().then((snapshotAvailable: boolean) => {

      if (snapshotAvailable) {
        this.IGV.isUpdatable = true;
      } else {
        this.IGV.isUpdatable = false;
      }

      this.deploy.getSnapshots().then((snapshotList) => {
        // snapshots will be an array of snapshot uuids
        if (Array.isArray(snapshotList) && snapshotList.length) {
          snapshotList.forEach(snapshot => {
            this.IGV.DEL_CHANNEL_LIST.forEach(savedSnapShot => {
              if (savedSnapShot === snapshot) {
                this.deploy.deleteSnapshot(snapshot);
              }
            });
          });
        }
      });

      if (snapshotAvailable) {
        this.downloadAndInstall();
      }
      else {
        this.globalFunc.loadingDismiss();
        this.globalFunc.showNoUpdate();
      }
    });
  }

  downloadAndInstall() {
    this.globalFunc.showToastDownloading();
    this.deploy.download().then(() => {
      this.deploy.extract().then(() => {

        this.IGV.isUpdatable = false;
        
        let inputTitle: string;
        if (this.IGV.gLangInd === 'zh') {
          inputTitle = this.IGV.RELOAD_ZH;
        } else if (this.IGV.gLangInd === 'cn') {
          inputTitle = this.IGV.RELOAD_CN;
        } else {
          inputTitle = this.IGV.RELOAD_EN;
        }

        let alert = this.alertCtrl.create({
          title: inputTitle,
          message: '',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.deploy.load();
              }
            }
          ]
        });
        alert.present();
        this.globalFunc.loadingDismiss();
      })
    });
  }


  changeLangInd(lang) {
    this.translate.use(lang);
    this.IGV.gLangInd = lang;

    this.storage.ready().then(() => {
      this.storage.set('mySetting', { langInd: lang });
    }, (error) => {
      this.globalFunc.presentSysErr();
    });

    this.menu.close();
  }

  showLangChoose() {
    let alert = this.alertCtrl.create();

    alert.addInput({
      type: 'radio',
      label: 'English',
      value: 'en'
    });
    alert.addInput({
      type: 'radio',
      label: '简',
      value: 'cn'
    });
    alert.addInput({
      type: 'radio',
      label: '繁',
      value: 'zh'
    });
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.translate.use(data);
        this.IGV.gLangInd = data;
        this.storage.set('mySetting', { langInd: this.IGV.gLangInd });
      }
    });
    alert.present();
  }

}
