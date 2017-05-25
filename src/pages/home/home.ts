import { Component, Inject } from '@angular/core';

import { OT_GV, IGV } from './../../globalVar/gv';
import { GF } from './../../globalFunc/gf';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    @Inject(OT_GV) public IGV: IGV,
    public globalFunc: GF
  ) {
    this.globalFunc.showBanner();
  }

  openPage(page: string) {
    this.globalFunc.loadingPresent();
    setTimeout(() => {
      document.getElementById(page).click();
      this.globalFunc.loadingDismiss();
    }, 2500);
  }

}


