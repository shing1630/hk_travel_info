import { Component, Inject } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { OT_GV, IGV } from './../../globalVar/gv';
import { GF } from './../../globalFunc/gf';
import { AppItem } from "./../../models/appItem/AppItem";
import { GenApp } from "./genApp/genApp";

@Component({
  selector: 'genAppList',
  templateUrl: 'genAppList.html'
})
export class GenAppList {
  appItemList: AppItem[] = [];

  constructor( @Inject(OT_GV) public IGV: IGV,
    public globalFunc: GF,
    public alertCtrl: AlertController,
    public storage: Storage,
    public navParams: NavParams,
    public navCtrl: NavController) {

    this.globalFunc.removeBanner();
    this.appItemList = navParams.get('selectedAppItemList');
    // Set My Favourite flag
    // for (let appItem of this.appItemList) {
    //   appItem.saveFlag = this.globalFunc.isMyFavourite(appItem.id);
    // }

  }

  itemTapped(event, selectedAppItem) {
    this.globalFunc.showInterstitial();
    this.navCtrl.push(GenApp, {
      selectedAppItem: selectedAppItem
    });
  }

  removeFromMyFavourite(appItem: AppItem) {
    // Remove app
    let index: number = this.IGV.myAppItemList.indexOf(this.IGV.myAppItemMap.get(appItem.id));
    if (index !== -1) {
      this.IGV.myAppItemList.splice(index, 1);
      this.IGV.myAppItemMap.delete(appItem.id);
      this.storage.set('myFavourite', { myappItemList: this.IGV.myAppItemList });
    }
  }

  clearAllMyFavourite() {
    this.IGV.myAppItemList.length = 0;;
    this.IGV.myAppItemMap.clear();
    this.storage.set('myFavourite', { myappItemList: this.IGV.myAppItemList });
  }

  presentClearAllConfirm() {

    let title: string;
    let no: string;
    let yes: string;
    if (this.IGV.gLangInd === 'zh') {
      title = this.IGV.CLEAR_ALL_MY_FAVOURITE_APP_ZH;
      no = this.IGV.NO_ZH;
      yes = this.IGV.YES_ZH;
    } else if (this.IGV.gLangInd === 'cn') {
      title = this.IGV.CLEAR_ALL_MY_FAVOURITE_APP_CN;
      no = this.IGV.NO_CN;
      yes = this.IGV.YES_CN;
    } else {
      title = this.IGV.CLEAR_ALL_MY_FAVOURITE_APP_EN;
      no = this.IGV.NO_EN;
      yes = this.IGV.YES_EN;
    }

    let alert = this.alertCtrl.create({
      title: title,
      buttons: [
        {
          text: no,
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: yes,
          handler: () => {
            this.clearAllMyFavourite();
          }
        }
      ]
    });
    alert.present();
  }
}
