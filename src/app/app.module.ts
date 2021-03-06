import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { OT_GV, IGV } from './../globalVar/gv';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { AdMob } from '@ionic-native/admob';
import { AppRate } from '@ionic-native/app-rate';
import { Market } from '@ionic-native/market';
import { GF } from './../globalFunc/gf';
import { IsShowAppItem } from "./../pipe/IsShowAppItem";

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { HomePage } from '../pages/home/home';
import { GenAppList } from '../pages/genAppList/genAppList';
import { GenInfoList } from '../pages/genInfoList/genInfoList';
import { GenApp } from '../pages/genAppList/genApp/genApp';
import { SupportPage } from '../pages/support/support';

import { TransAppItemList } from './../models/appItem/TransAppItemList';
import { DiningAppItemList } from './../models/appItem/DiningAppItemList';
import { WeatherAppItemList } from './../models/appItem/WeatherAppItemList';
import { AccomAppItemList } from './../models/appItem/AccomAppItemList';
import { ShopAppItemList } from './../models/appItem/ShopAppItemList';
import { EnterAppItemList } from './../models/appItem/EnterAppItemList';
import { UtilityAppItemList } from './../models/appItem/UtilityAppItemList';
import { AccomInfoItemList } from "../models/infoItem/AccomInfoItemList";
import { GenInfo } from "../pages/genInfoList/genInfo/genInfo";
import { TransInfoItemList } from "../models/infoItem/TransInfoItemList";
import { WeatherInfoItemList } from "../models/infoItem/WeatherInfoItemList";
import { DiningInfoItemList } from "../models/infoItem/DiningInfoItemList";
import { ShopInfoItemList } from "../models/infoItem/ShopInfoItemList";
import { EnterInfoItemList } from "../models/infoItem/EnterInfoItemList";
import { UtilityInfoItemList } from "../models/infoItem/UtilityInfoItemList";
import { InAppBrowser } from "@ionic-native/in-app-browser";

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '7187e7b9'
  }
};

@NgModule({
  declarations: [
    MyApp,
    IsShowAppItem,
    HomePage,
    GenAppList,
    GenInfoList,
    GenApp,
    GenInfo,
    SupportPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    BrowserModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    CloudModule.forRoot(cloudSettings),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GenAppList,
    GenInfoList,
    GenApp,
    GenInfo,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: OT_GV, useValue: IGV },
    AdMob,
    GF,
    Network,
    AppRate,
    Market,
    StatusBar,
    SplashScreen,
    InAppBrowser,
    TransInfoItemList,
    DiningInfoItemList,
    WeatherInfoItemList,
    AccomInfoItemList,
    ShopInfoItemList,
    EnterInfoItemList,
    UtilityInfoItemList,
    TransAppItemList,
    DiningAppItemList,
    WeatherAppItemList,
    AccomAppItemList,
    ShopAppItemList,
    EnterAppItemList,
    UtilityAppItemList
  ]
})
export class AppModule { }

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

