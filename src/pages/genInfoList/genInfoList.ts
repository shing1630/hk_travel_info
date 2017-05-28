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
    public accomInfoItemList: AccomInfoItemList,
    public accomAppItemList: AccomAppItemList, 
    public transInfoItemList: TransInfoItemList,
    public transAppItemList: TransAppItemList,) {

    this.globalFunc.removeBanner();
    switch (this.IGV.gPageInd) {
      case 'transport': {
        this.infoItemList = transInfoItemList.list;
        this.infoItemList.forEach(infoItem => {
          infoItem.appItemList = this.getAppItemList(infoItem.appItemIdList, transAppItemList.list);
        });
        break;
      }
      case 'dining': {
        this.infoItemList = null;
        break;
      }
      case 'weather': {
        this.infoItemList = null;
        break;
      }
      case 'accommodation': {
        this.infoItemList = accomInfoItemList.list;
        this.infoItemList.forEach(infoItem => {
          infoItem.appItemList = this.getAppItemList(infoItem.appItemIdList, accomAppItemList.list);
        });
        break;
      }
      case 'shopping': {
        this.infoItemList = null;
        break;
      }
      case 'entertainment': {
        this.infoItemList = null;
        break;
      }
      case 'utility': {
        this.infoItemList = null;
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
        if(appItemId === appItem.id){
          resultlist.push(appItem);
        }
      });
    });
    return resultlist;
  }

}
