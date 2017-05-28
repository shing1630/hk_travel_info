import { Injectable } from '@angular/core';
import { InfoItem } from "./InfoItem";

@Injectable()
export class TransInfoItemList {

    public list: Array<InfoItem> = new Array();

    constructor() {
        this.init();
    }

    init() {

        let transInfoItem = new InfoItem();
        transInfoItem.id=	'IT001'
        transInfoItem.infoHeaderEN=	'Mass Transit Railway'
        transInfoItem.infoHeaderCN=	'港铁 MTR'
        transInfoItem.infoHeaderZH=	'港鐵 MTR'
        transInfoItem.infoLogo=	'assets/img/info/train.png'
        transInfoItem.info1Flag=	true
        transInfoItem.info1DescEN=	'Single Journey Ticket Fare ranged from HK$4.5 to HK$10. If crossing harbour (Hong Kong Island to Kowloon), fare ranged from HK$9 to HK$30'
        transInfoItem.info1DescCN=	'单程票价从 HK$4.5至 HK$10不等。过海港（港岛至九龙）的票价为港币 HK$9至 HK$30'
        transInfoItem.info1DescZH=	'單程票價從 HK$4.5到 HK$10不等。 過海港（港島至九龍）的票價為港幣HK$9至HK$30'
        transInfoItem.info1Pic=	'https://vgy.me/xsXUwq.png'
        transInfoItem.info2Flag=	true
        transInfoItem.info2DescEN=	'Using Octopus card (electronic payment) instead of Single Journey Ticket can enjoy discount up to HK$3.'
        transInfoItem.info2DescCN=	'使用八达通（电子收费）而不是单程票可享受高达HK $ 3的折扣。'
        transInfoItem.info2DescZH=	'使用八達通（電子收費）而不是單程票可享受高達 HK$3的折扣。'
        transInfoItem.info2Pic=	'https://vgy.me/2EebIe.jpg'
        transInfoItem.info3Flag=	false
        transInfoItem.info3DescEN=	''
        transInfoItem.info3DescCN=	'IA001'
        transInfoItem.info3DescZH=	''
        transInfoItem.info3Pic=	''
        transInfoItem.info4Flag=	false
        transInfoItem.info4DescEN=	''
        transInfoItem.info4DescCN=	''
        transInfoItem.info4DescZH=	''
        transInfoItem.info5Pic=	''
        transInfoItem.info5Flag=	false
        transInfoItem.info5DescEN=	''
        transInfoItem.info5DescCN=	''
        transInfoItem.info5DescZH=	''
        transInfoItem.info5Pic=	''
        transInfoItem.info6Flag=	false
        transInfoItem.info6DescEN=	''
        transInfoItem.info6DescCN=	''
        transInfoItem.info6DescZH=	''
        transInfoItem.info6Pic=	''
        transInfoItem.info7Flag=	false
        transInfoItem.info7DescEN=	''
        transInfoItem.info7DescCN=	''
        transInfoItem.info7DescZH=	''
        transInfoItem.info7Pic=	''
        transInfoItem.infoAppFlag=	true
        transInfoItem.appItemIdList.push("T001", "T002");
        transInfoItem.appItemList=	null

        this.list.push(transInfoItem);
        transInfoItem = new InfoItem();
    }

}