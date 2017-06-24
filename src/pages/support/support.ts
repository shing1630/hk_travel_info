import { Component, Inject } from '@angular/core';
import { AppRate } from '@ionic-native/app-rate';

import { OT_GV, IGV } from './../../globalVar/gv';
import { GF } from './../../globalFunc/gf';

@Component({
  selector: 'page-support',
  templateUrl: 'support.html'
})
export class SupportPage {

  appID: string = 'com.hkTravelInfo0730';

  constructor(
    @Inject(OT_GV) public IGV: IGV,
    public globalFunc: GF,
    private appRate: AppRate
  ) {
  }

  openAppStore() {
    this.globalFunc.openMarket(this.appID)
  }

  openStoreRate() {
    this.appRate.preferences.storeAppURL = {
      ios: this.appID,
      android: 'market://details?id=' + this.appID,
    };
    this.appRate.promptForRating(true);
  }

  showRewardVideoAd() {
    this.globalFunc.showRewardVideoAd();
  }

  showInterstitialVideoImmd() {
    IGV.isDisableVideoAdv = true;
    this.globalFunc.showInterstitialVideoImmd();
  }

  showInterstitialImmd() {
    IGV.isDisableInterAdv = true;
    this.globalFunc.showInterstitialImmd();
  }



}
