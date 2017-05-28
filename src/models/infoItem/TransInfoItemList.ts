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
        transInfoItem.id = 'IT001'
        transInfoItem.infoHeaderEN = 'Train'
        transInfoItem.infoHeaderCN = '铁路'
        transInfoItem.infoHeaderZH = '鐵路'
        transInfoItem.infoLogo = 'assets/img/info/train.png'
        transInfoItem.info1Flag = true
        transInfoItem.info1HdrEN = 'Ticket Fare'
        transInfoItem.info1HdrCN = '票价'
        transInfoItem.info1HdrZH = '票價'
        transInfoItem.info1DescEN = 'Single Journey Ticket Fare ranged from HK$4.5 to HK$10. If crossing harbour (Hong Kong Island to Kowloon), fare ranged from HK$9 to HK$30'
        transInfoItem.info1DescCN = '单程票价从 HK$4.5至 HK$10不等。过海（港岛至九龙）的票价为 HK$9至 HK$30'
        transInfoItem.info1DescZH = '單程票價從 HK$4.5到 HK$10不等。 過海（港島至九龍）的票價為 HK$9至 HK$30'
        transInfoItem.info1Pic = 'https://vgy.me/SnBNDt.png'
        transInfoItem.info2Flag = true
        transInfoItem.info2HdrEN = 'Electronic payment'
        transInfoItem.info2HdrCN = '电子收费'
        transInfoItem.info2HdrZH = '電子收費'
        transInfoItem.info2DescEN = 'Using Octopus card (electronic payment) instead of Single Journey Ticket can enjoy discount.(Ranged from HK$0.2 to HK$3) PS: If On-Loan Octopus returned within 90 days, it will be charged refund fee HK$9'
        transInfoItem.info2DescCN = '使用八达通（电子收费）而不是单程票，可享受折扣。(HK$0.2 至 HK$3) PS：如果在90天内退八达通，将收取退款费用 HK$9'
        transInfoItem.info2DescZH = '使用八達通（電子收費）而不是單程票，可享受折扣。(HK$0.2 至 HK$3) PS：如果在90天內退八達通，將收取退款費用 HK$9'
        transInfoItem.info2Pic = 'https://vgy.me/7Ewjf4.png'
        transInfoItem.info3Flag = true
        transInfoItem.info3HdrEN = 'Day Pass'
        transInfoItem.info3HdrCN = '全日通'
        transInfoItem.info3HdrZH = '全日通'
        transInfoItem.info3DescEN = 'Adult Tourist Day Pass is not recommended because it may not save much money even you ride a lot.'
        transInfoItem.info3DescCN = '不建议使用成人游客全日通。因为即使乘坐很多，但也不会节省很多钱。'
        transInfoItem.info3DescZH = '不建議使用成人遊客全日通。因為即使乘坐很多，但也不會節省很多錢。'
        transInfoItem.info3Pic = 'https://vgy.me/L8KGCD.png'
        transInfoItem.info4Flag = true
        transInfoItem.info4HdrEN = 'Airport Express'
        transInfoItem.info4HdrCN = '机场快线'
        transInfoItem.info4HdrZH = '機場快線'
        transInfoItem.info4DescEN = 'The ride of Airport Express between the Airport and Central (Hong Kong Island) takes less than 30 minutes. However, bus is more convenient and cheaper way to travel from Airport to your hotel.'
        transInfoItem.info4DescCN = '搭乘机场快线从机场及中环（香港岛）之间的车程不到30分钟。然而，从机场到酒店的方法是搭乘更方便，更便宜的巴士。'
        transInfoItem.info4DescZH = '搭乘機場快線從機場及中環（香港島）之間的車程不到30分鐘。然而，從機場到酒店的方法是搭乘更方便，更便宜的巴士。'
        transInfoItem.info4Pic = 'https://vgy.me/dayc0P.jpg'
        transInfoItem.info5Flag = true
        transInfoItem.info5HdrEN = 'Fare gates'
        transInfoItem.info5HdrCN = '收费闸机'
        transInfoItem.info5HdrZH = '收費閘機'
        transInfoItem.info5DescEN = 'Fare gates for Tsim Sha Tsui and East Tsim Sha Tsui Stations are separated. Single journey ticket passengers need purchase a second ticket if interchange between these two stations. (Octopus card users can interchange these stations within thirty minutes without any charges)'
        transInfoItem.info5DescCN = '尖沙咀站和尖东站的收费闸机是分开的。如果这两个站之间转乘，单程票乘客需要购买第二张票。（八达通卡用户可在三十分钟内转乘尖沙咀站和尖东站并不收任何费用）'
        transInfoItem.info5DescZH = '尖沙咀站和尖東站的收費閘機是分開的。如果這兩個站之間轉乘，單程票乘客需要購買第二張票。（八達通卡用戶可在三十分鐘內轉乘尖沙咀站和尖東站並不收任何費用）'
        transInfoItem.info5Pic = 'https://vgy.me/SemOHL.jpg'
        transInfoItem.info6Flag = false
        transInfoItem.info6HdrEN = ''
        transInfoItem.info6HdrCN = ''
        transInfoItem.info6HdrZH = ''
        transInfoItem.info6DescEN = ''
        transInfoItem.info6DescCN = ''
        transInfoItem.info6DescZH = ''
        transInfoItem.info6Pic = ''
        transInfoItem.info7Flag = false
        transInfoItem.info7HdrEN = ''
        transInfoItem.info7HdrCN = ''
        transInfoItem.info7HdrZH = ''
        transInfoItem.info7DescEN = ''
        transInfoItem.info7DescCN = ''
        transInfoItem.info7DescZH = ''
        transInfoItem.info7Pic = ''
        transInfoItem.infoAppFlag = true
        transInfoItem.appItemIdList.push("T001", "T002");
        transInfoItem.appItemList = null

        this.list.push(transInfoItem);
        transInfoItem = new InfoItem();
    }

}