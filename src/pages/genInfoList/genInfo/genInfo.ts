import { Component, Inject } from '@angular/core';
import { Platform, NavParams } from 'ionic-angular';
import { Market } from '@ionic-native/market';
import { Storage } from '@ionic/storage';

import { AppItem } from "./../../../models/appItem/AppItem";
import { OT_GV, IGV } from './../../../globalVar/gv';
import { GF } from './../../../globalFunc/gf';
import { InfoItem } from "../../../models/infoItem/InfoItem";

@Component({
  selector: 'genInfo',
  templateUrl: 'genInfo.html'
})
export class GenInfo {
  selectedInfoItem: InfoItem;

  constructor( @Inject(OT_GV) public IGV: IGV,
    public platform: Platform,
    private market: Market,
    public globalFunc: GF,
    public storage: Storage,
    public navParams: NavParams) {

    this.selectedInfoItem = navParams.get('selectedInfoItem');
  }

}
