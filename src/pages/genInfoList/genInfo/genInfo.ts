import { Component, Inject } from '@angular/core';
import { Platform, NavParams, NavController } from 'ionic-angular';
import { Market } from '@ionic-native/market';
import { Storage } from '@ionic/storage';

import { OT_GV, IGV } from './../../../globalVar/gv';
import { GF } from './../../../globalFunc/gf';
import { InfoItem } from "../../../models/infoItem/InfoItem";
import { GenAppList } from "../../genAppList/genAppList";

@Component({
  selector: 'genInfo',
  templateUrl: 'genInfo.html'
})
export class GenInfo {
  selectedInfoItem: InfoItem;
  // @ViewChild(Content) content: Content;

  constructor( @Inject(OT_GV) public IGV: IGV,
    public platform: Platform,
    private market: Market,
    public globalFunc: GF,
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams) {
    
    this.globalFunc.showBanner();
    this.selectedInfoItem = navParams.get('selectedInfoItem');
  }

  // ngAfterViewInit() {
  //   this.content.ionScrollEnd.subscribe(($event: any) => {
  //     if (this.content.getContentDimensions().scrollTop
  //       + this.content.getContentDimensions().contentHeight
  //       >= this.content.getContentDimensions().scrollHeight) {
  //     }
  //   });
  // }

  appReviewTapped(event, selectedAppItemList) {
    this.navCtrl.push(GenAppList, {
      selectedAppItemList: selectedAppItemList
    });
  }

}
