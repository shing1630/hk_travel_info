import { Component, Inject, ViewChild } from '@angular/core';
import { NavController, Content, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { OT_GV, IGV } from './../../globalVar/gv';
import { GF } from './../../globalFunc/gf';
import { AppItem } from "./../../models/appItem/AppItem";
import { AccomInfoItemList } from "../../models/infoItem/AccomInfoItemList";
import { InfoItem } from "../../models/infoItem/InfoItem";
import { AccomAppItemList } from "../../models/appItem/AccomAppItemList";
import { GenInfo } from "./genInfo/genInfo";
import { TransInfoItemList } from "../../models/infoItem/TransInfoItemList";
import { TransAppItemList } from "../../models/appItem/TransAppItemList";
import { DiningInfoItemList } from "../../models/infoItem/DiningInfoItemList";
import { WeatherInfoItemList } from "../../models/infoItem/WeatherInfoItemList";
import { ShopInfoItemList } from "../../models/infoItem/ShopInfoItemList";
import { EnterInfoItemList } from "../../models/infoItem/EnterInfoItemList";
import { UtilityInfoItemList } from "../../models/infoItem/UtilityInfoItemList";
import { DiningAppItemList } from "../../models/appItem/DiningAppItemList";
import { WeatherAppItemList } from "../../models/appItem/WeatherAppItemList";
import { ShopAppItemList } from "../../models/appItem/ShopAppItemList";
import { EnterAppItemList } from "../../models/appItem/EnterAppItemList";
import { UtilityAppItemList } from "../../models/appItem/UtilityAppItemList";

@Component({
  selector: 'genInfoList',
  templateUrl: 'genInfoList.html'
})
export class GenInfoList {
  infoItemList: Array<InfoItem>;

  @ViewChild(Content) content: Content;

  constructor( @Inject(OT_GV) public IGV: IGV,
    public globalFunc: GF,
    public alertCtrl: AlertController,
    public storage: Storage,
    public navCtrl: NavController,
    public transInfoItemList: TransInfoItemList,
    public accomInfoItemList: AccomInfoItemList,
    public diningInfoItemList: DiningInfoItemList,
    public weatherInfoItemList: WeatherInfoItemList,
    public shopInfoItemList: ShopInfoItemList,
    public enterInfoItemList: EnterInfoItemList,
    public utilityInfoItemList: UtilityInfoItemList,
    public accomAppItemList: AccomAppItemList,
    public transAppItemList: TransAppItemList,
    public diningAppItemList: DiningAppItemList,
    public weatherAppItemList: WeatherAppItemList,
    public shopAppItemList: ShopAppItemList,
    public enterAppItemList: EnterAppItemList,
    public utilityAppItemList: UtilityAppItemList) {

    this.globalFunc.removeBanner();
    switch (this.IGV.gPageInd) {
      case 'transport': {
        this.infoItemList = transInfoItemList.list;
        this.infoItemList.forEach(infoItem => {
          if (infoItem.infoAppFlag) {
            infoItem.appItemList = this.getAppItemList(infoItem.appItemIdList, transAppItemList.list);
          }
        });
        break;
      }
      case 'dining': {
        this.infoItemList = diningInfoItemList.list;
        this.infoItemList.forEach(infoItem => {
          if (infoItem.infoAppFlag) {
            infoItem.appItemList = this.getAppItemList(infoItem.appItemIdList, diningAppItemList.list);
          }
        });
        break;
      }
      case 'weather': {
        this.infoItemList = weatherInfoItemList.list;
        this.infoItemList.forEach(infoItem => {
          if (infoItem.infoAppFlag) {
            infoItem.appItemList = this.getAppItemList(infoItem.appItemIdList, weatherAppItemList.list);
          }
        });
        break;
      }
      case 'accommodation': {
        this.infoItemList = accomInfoItemList.list;
        this.infoItemList.forEach(infoItem => {
          if (infoItem.infoAppFlag) {
            infoItem.appItemList = this.getAppItemList(infoItem.appItemIdList, accomAppItemList.list);
          }
        });
        break;
      }
      case 'shopping': {
        this.infoItemList = shopInfoItemList.list;
        this.infoItemList.forEach(infoItem => {
          if (infoItem.infoAppFlag) {
            infoItem.appItemList = this.getAppItemList(infoItem.appItemIdList, shopAppItemList.list);
          }
        });
        break;
      }
      case 'entertainment': {
        this.infoItemList = enterInfoItemList.list;
        this.infoItemList.forEach(infoItem => {
          if (infoItem.infoAppFlag) {
            infoItem.appItemList = this.getAppItemList(infoItem.appItemIdList, enterAppItemList.list);
          }
        });
        break;
      }
      case 'utility': {
        this.infoItemList = utilityInfoItemList.list;
        this.infoItemList.forEach(infoItem => {
          if (infoItem.infoAppFlag) {
            infoItem.appItemList = this.getAppItemList(infoItem.appItemIdList, utilityAppItemList.list);
          }
        });
        break;
      }
      default: {
        this.infoItemList = null;
        break;
      }
    }

  }

  infoItemTapped(event, selectedInfoItem) {
    this.navCtrl.push(GenInfo, {
      selectedInfoItem: selectedInfoItem
    });
  }

  getAppItemList(appItemIdList: Array<String>, appItemList: Array<AppItem>) {
    let resultlist: Array<AppItem> = new Array();
    appItemIdList.forEach(appItemId => {
      appItemList.forEach(appItem => {
        if (appItemId === appItem.id) {
          resultlist.push(appItem);
        }
      });
    });
    return resultlist;
  }

}
