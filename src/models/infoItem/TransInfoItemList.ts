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
        transInfoItem.infoLogo = 'assets/img/info/trans/train.png'
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

        transInfoItem.id = 'IT002'
        transInfoItem.infoHeaderEN = 'Bus'
        transInfoItem.infoHeaderCN = '巴士'
        transInfoItem.infoHeaderZH = '巴士'
        transInfoItem.infoLogo = 'assets/img/info/trans/bus.png'
        transInfoItem.info1Flag = true
        transInfoItem.info1HdrEN = 'Bus Companies'
        transInfoItem.info1HdrCN = '巴士公司'
        transInfoItem.info1HdrZH = '巴士公司'
        transInfoItem.info1DescEN = 'Three major bus companies operate franchised public bus services - 1. Kowloon Motor Bus provides Kowloon and the New Territories, and operates cross-harbour tunnel routes. 2. Citybus Limited provides Hong Kong Island, cross-harbour routes. 3. New World First Bus provides Hong Kong Island, cross-harbour routes.'
        transInfoItem.info1DescCN = '三大巴士公司特许经营公共巴士服务 - 1.九龙巴士(简称九巴)营运九龙，新界及过海隧道路线。2.城巴有限公司(简称城巴)营运香港岛及过海路线。3.新世界第一巴士(简称新巴)营运香港岛及过海路线。'
        transInfoItem.info1DescZH = '三大巴士公司特許經營公共巴士服務 - 1.九龍巴士(簡稱九巴)營運九龍，新界及過海隧道路線。2.城巴有限公司(簡稱城巴)營運香港島及過海路線。3.新世界第一巴士(簡稱新巴)營運香港島及過海路線。'
        transInfoItem.info1Pic = 'https://vgy.me/budT5Q.jpg'
        transInfoItem.info2Flag = true
        transInfoItem.info2HdrEN = 'How to ride'
        transInfoItem.info2HdrCN = '乘搭方法'
        transInfoItem.info2HdrZH = '乘搭方法'
        transInfoItem.info2DescEN = 'Boarding in the front door. Self-service ticketing and no change is given (Better use Octopus Card). When near destination stop, press the BELL buttons and get off through the rear door.'
        transInfoItem.info2DescCN = '前门登车，将车资投入箱中，不设找续（建议使用八达通）。当接近目的地前，按BELL车铃，由後门下车。'
        transInfoItem.info2DescZH = '前門登車，將車資投入箱中，不設找續（建議使用八達通）。當接近目的地前，按BELL車鈴，由後門下車。'
        transInfoItem.info2Pic = 'https://vgy.me/HpgaDX.jpg'
        transInfoItem.info3Flag = true
        transInfoItem.info3HdrEN = 'Airport Bus'
        transInfoItem.info3HdrCN = '机场巴士'
        transInfoItem.info3HdrZH = '機場巴士'
        transInfoItem.info3DescEN = 'Route number A prefix (A11, A20) and E (E23, E33) prefix are airport bus. A prefix route is faster than E prefix but E prefix is cheaper (popular with airport workers).'
        transInfoItem.info3DescCN = '路线为A字首（A11，A20）和路线为E字首（E23，E33）是机场巴士。 A字首比E字首快，但E字首比A字首便宜（受机场工作人员欢迎）。'
        transInfoItem.info3DescZH = '路線為A字首（A11，A20）和路線為E字首（E23，E33）是機場巴士。 A字首比E字首快，但E字首比A字首便宜（受機場工作人員歡迎）。'
        transInfoItem.info3Pic = 'https://vgy.me/F7UfR6.jpg'
        transInfoItem.info4Flag = true
        transInfoItem.info4HdrEN = 'Bus Fare'
        transInfoItem.info4HdrCN = '巴士票价'
        transInfoItem.info4HdrZH = '巴士票價'
        transInfoItem.info4DescEN = 'Bus fare ranged from HK$4 to HK$50. Average fare is around HK$7. Check the fare in related apps or on bus stop signs.'
        transInfoItem.info4DescCN = '巴士票价由HK$4至HK$50不等。平均票价约HK$7。可在相关应用程序或巴士车站查询票价。'
        transInfoItem.info4DescZH = '巴士票價由HK$4至HK$50不等。平均票價約HK$7。可在相關應用程序或巴士車站查詢票價。'
        transInfoItem.info4Pic = 'https://vgy.me/F7UfR6.jpg'
        transInfoItem.info5Flag = false
        transInfoItem.info5HdrEN = ''
        transInfoItem.info5HdrCN = ''
        transInfoItem.info5HdrZH = ''
        transInfoItem.info5DescEN = ''
        transInfoItem.info5DescCN = ''
        transInfoItem.info5DescZH = ''
        transInfoItem.info5Pic = ''
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
        transInfoItem.appItemIdList.push("T003", "T004", "T002", "T012");
        transInfoItem.appItemList = null

        this.list.push(transInfoItem);
        transInfoItem = new InfoItem();
    }

}