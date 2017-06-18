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
        transInfoItem.info3DescCN = '不建议使用成人游客全日通。因为即使乘坐很多，但也不会节省很多金钱。'
        transInfoItem.info3DescZH = '不建議使用成人遊客全日通。因為即使乘坐很多，但也不會節省很多金錢。'
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
        transInfoItem.infoHeaderCN = '巴士 (公车)'
        transInfoItem.infoHeaderZH = '巴士 (公車)'
        transInfoItem.infoLogo = 'assets/img/info/trans/bus.png'
        transInfoItem.info1Flag = true
        transInfoItem.info1HdrEN = 'Bus Companies'
        transInfoItem.info1HdrCN = '巴士公司'
        transInfoItem.info1HdrZH = '巴士公司'
        transInfoItem.info1DescEN = `Three major bus companies operate franchised public bus services <br> 
                                    1. Kowloon Motor Bus provides Kowloon and the New Territories, and operates cross-harbour tunnel routes. <br>
                                    2. Citybus Limited provides Hong Kong Island, cross-harbour routes. <br>
                                    3. New World First Bus provides Hong Kong Island, cross-harbour routes.`
        transInfoItem.info1DescCN = `三大巴士公司特许经营公共巴士服务 <br>
                                    1. 九龙巴士(简称九巴)营运九龙，新界及过海隧道路线<br>
                                    2. 城巴有限公司(简称城巴)营运香港岛及过海路线。<br>
                                    3. 新世界第一巴士(简称新巴)营运香港岛及过海路线。`
        transInfoItem.info1DescZH = `三大巴士公司特許經營公共巴士服務 <br>
                                    1. 九龍巴士(簡稱九巴)營運九龍，新界及過海隧道路線<br>
                                    2. 城巴有限公司(簡稱城巴)營運香港島及過海路線。<br>
                                    3. 新世界第一巴士(簡稱新巴)營運香港島及過海路線。`
        transInfoItem.info1Pic = 'https://vgy.me/budT5Q.jpg'
        transInfoItem.info2Flag = true
        transInfoItem.info2HdrEN = 'How to ride'
        transInfoItem.info2HdrCN = '乘搭方法'
        transInfoItem.info2HdrZH = '乘搭方法'
        transInfoItem.info2DescEN = 'Boarding in the front door. Self-service ticketing and no change is given (Better use Octopus Card). When near destination stop, press the BELL buttons and get off through the rear door.'
        transInfoItem.info2DescCN = '前门登车，将车资投入箱中，不设找续（建议使用八达通）。当接近目的地前，按BELL车铃，由後门下车。'
        transInfoItem.info2DescZH = '前門登車，將車資投入箱中，不設找續（建議使用八達通）。當接近目的地前，按BELL車鈴，由後門下車。'
        transInfoItem.info2Pic = 'https://vgy.me/sZE2QD.jpg'
        transInfoItem.info3Flag = true
        transInfoItem.info3HdrEN = 'Airport Bus'
        transInfoItem.info3HdrCN = '机场巴士'
        transInfoItem.info3HdrZH = '機場巴士'
        transInfoItem.info3DescEN = 'Route number A prefix (A11, A20) and E (E23, E33) prefix are airport bus. A prefix route is faster than E prefix but E prefix is cheaper (with longer route).'
        transInfoItem.info3DescCN = '路线为A字首（A11，A20）和路线为E字首（E23，E33）是机场巴士。 A字首比E字首快，但E字首比A字首便宜（较长车程）。'
        transInfoItem.info3DescZH = '路線為A字首（A11，A20）和路線為E字首（E23，E33）是機場巴士。 A字首比E字首快，但E字首比A字首便宜（較長車程）。'
        transInfoItem.info3Pic = 'https://vgy.me/HpgaDX.jpg'
        transInfoItem.info4Flag = true
        transInfoItem.info4HdrEN = 'Bus Fare'
        transInfoItem.info4HdrCN = '巴士票价'
        transInfoItem.info4HdrZH = '巴士票價'
        transInfoItem.info4DescEN = 'Bus fare ranged from HK$4 to HK$50. Average fare is around HK$7. Check the fare in related apps or on bus stop signs.'
        transInfoItem.info4DescCN = '巴士票价由HK$4至HK$50不等。平均票价约HK$7。可在相关应用程序或巴士车站查询票价。'
        transInfoItem.info4DescZH = '巴士票價由HK$4至HK$50不等。平均票價約HK$7。可在相關應用程序或巴士車站查詢票價。'
        transInfoItem.info4Pic = 'https://vgy.me/F7UfR6.jpg'
        transInfoItem.info5Flag = true
        transInfoItem.info5HdrEN = 'Sightseeing Bus'
        transInfoItem.info5HdrCN = '观光巴士'
        transInfoItem.info5HdrZH = '觀光巴士'
        transInfoItem.info5DescEN = `If you stay in Hong Kong only for 1 or 2 days, the sightseeing bus may help you to feel the city in a short time. <br>
                                    There are two sightseeing bus services provided: <br>
                                    1. Big Bus Tours (More routes, recorded commentary in ten languages) <br>
                                    2. Rickshaw Sightseeing Bus (Cheaper, provided single trip)`
        transInfoItem.info5DescCN = `如果您只在香港逗留一至两天，可乘坐观光巴士，於短时间内感受到这个城市。 <br>
                                    两种观光巴士提供服务：<br>
                                    1. 大巴士公司（路线多，十国语言的电子导游）<br>
                                    2. 人力车观光巴士（便宜，提供单程）`
        transInfoItem.info5DescZH = `如果您只在香港逗留一至兩天，可乘坐觀光巴士，於短時間內感受到這個城市。 <br>
                                    兩種觀光巴士提供服務：<br>
                                    1. 大巴士公司（路線多，十國語言的電子導游）<br>
                                    2. 人力車觀光巴士（便宜，提供單程）`
        transInfoItem.info5Pic = 'https://vgy.me/dgXBQF.jpg'
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
        transInfoItem.id = 'IT003'
        transInfoItem.infoHeaderEN = 'Tram'
        transInfoItem.infoHeaderCN = '电车'
        transInfoItem.infoHeaderZH = '電車'
        transInfoItem.infoLogo = 'assets/img/info/trans/tram.png'
        transInfoItem.info1Flag = true
        transInfoItem.info1HdrEN = 'Ding Ding'
        transInfoItem.info1HdrCN = '叮叮'
        transInfoItem.info1HdrZH = '叮叮'
        transInfoItem.info1DescEN = 'Trams are called Ding Ding by Hong Kong people because the onomatopoeia of the bell rings which use to warn pedestrians of their approach.'
        transInfoItem.info1DescCN = '电车被香港人称为叮叮，是因为电车开行或示警时，发出「叮叮」声的铃声。'
        transInfoItem.info1DescZH = '電車被香港人稱為叮叮，是因為電車開行或示警時，發出「叮叮」聲的鈴聲。'
        transInfoItem.info1Pic = 'https://vgy.me/cnNcdS.jpg'
        transInfoItem.info2Flag = true
        transInfoItem.info2HdrEN = 'Tram track'
        transInfoItem.info2HdrCN = '电车轨道'
        transInfoItem.info2HdrZH = '電車軌道'
        transInfoItem.info2DescEN = 'Since the tram tracks were originally built along the waterfront but after further land reclamation, most of the tram tracks are not beside the waterfront anymore.'
        transInfoItem.info2DescCN = '在兴建电车轨道时，都是在海旁路面建造的。不过经过不断填海，现时大部份电车轨道已远离海旁。'
        transInfoItem.info2DescZH = '在興建電車軌道時，都是在海旁路面建造的。不過經過不斷填海，現時大部份電車軌道已遠離海旁。'
        transInfoItem.info2Pic = 'https://vgy.me/oBoSvq.jpg'
        transInfoItem.info3Flag = true
        transInfoItem.info3HdrEN = 'How to ride'
        transInfoItem.info3HdrCN = '乘搭方法'
        transInfoItem.info3HdrZH = '乘搭方法'
        transInfoItem.info3DescEN = 'Boarding in the rear door. When near destination stop, approach the front door. After the tram stops, pay the fare (self-service ticketing and no change is given) and get off through the front door.'
        transInfoItem.info3DescCN = '後门登车，当接近目的地前，靠近前门。在电车停车後，将车资投入箱中，不设找续（建议使用八达通），并由前门下车。'
        transInfoItem.info3DescZH = '後門登車，當接近目的地前，靠近前門。在電車停車後，將車資投入箱中，不設找續（建議使用八達通），並由前門下車。'
        transInfoItem.info3Pic = 'https://vgy.me/8GBUk5.jpg'
        transInfoItem.info4Flag = true
        transInfoItem.info4HdrEN = 'Tram Fare'
        transInfoItem.info4HdrCN = '电车票价'
        transInfoItem.info4HdrZH = '電車票價'
        transInfoItem.info4DescEN = 'Fare charged is uniform regardless of the distance travelled. The fare for single journey is HK$2.30'
        transInfoItem.info4DescCN = '电车采不分远近丶单一收费。单程收费HK$2.3'
        transInfoItem.info4DescZH = '電車採不分遠近、單一收費。單程收費HK$2.3'
        transInfoItem.info4Pic = 'https://vgy.me/S63cID.jpg'
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
        transInfoItem.appItemIdList.push("T009", "T010");
        transInfoItem.appItemList = null
        this.list.push(transInfoItem);
        transInfoItem = new InfoItem();
        transInfoItem.id = 'IT004'
        transInfoItem.infoHeaderEN = 'Taxi'
        transInfoItem.infoHeaderCN = '的士 (出租车)'
        transInfoItem.infoHeaderZH = '的士 (計程車) '
        transInfoItem.infoLogo = 'assets/img/info/trans/taxi.png'
        transInfoItem.info1Flag = true
        transInfoItem.info1HdrEN = 'Taxi type'
        transInfoItem.info1HdrCN = '的士类型'
        transInfoItem.info1HdrZH = '的士類型'
        transInfoItem.info1DescEN = `Three are three types of taxis are defined by the service areas. <br>
                                    1. Urban taxi (Red): serve all areas of New Territories, Kowloon and Hong Kong Island. <br>
                                    2. New Territories taxi (Green): serve only parts of the New Territories. <br>
                                    3. Lantau taxi (Blue): serve Lantau Island.`
        transInfoItem.info1DescCN = `香港的士(出租车)分为三个类型。<br>
                                    1. 市区的士(红色)：行走新界，九龙及港岛区。 <br>
                                    2. 新界的士（绿色）：只为新界的部分地区服务。<br>
                                    3. 大屿山的士（蓝色）：行走大屿山。`
        transInfoItem.info1DescZH = `香港的士(出租車)分為三個類型。<br>
                                    1. 市區的士(紅色)：行走新界，九龍及港島區。 <br>
                                    2. 新界的士（綠色）：只為新界的部分地區服務。<br>
                                    3. 大嶼山的士（藍色）：行走大嶼山。`
        transInfoItem.info1Pic = 'https://vgy.me/G4ASo5.jpg'
        transInfoItem.info2Flag = true
        transInfoItem.info2HdrEN = 'Taxi Fare'
        transInfoItem.info2HdrCN = '的士收费'
        transInfoItem.info2HdrZH = '的士收費'
        transInfoItem.info2DescEN = `1. Urban taxi (Red): First 2 kilometres HK$ 24. <br>
                                    Every subsequent 200 metres/ Every period of 1 minute waiting time HK$ 1.7. <br>
                                    After the chargeable amount has reached HK$83.5 then HK$1.2. <br>
                                    2. New Territories taxi (Green): First 2 kilometres HK$ 20.5. <br>
                                    Every subsequent 200 metres/ Every period of 1 minute waiting time HK$ 1.5. <br>
                                    After the chargeable amount has reached HK$83.5 then HK$1.2. <br>
                                    3. Lantau taxi (Blue): First 2 kilometres HK$ 19. <br>
                                    Every subsequent 200 metres/ Every period of 1 minute waiting time HK$ 1.5. <br>
                                    After the chargeable amount has reached HK$83.5 then HK$1.4. <br>
                                    For all taxi type, every piece of baggage (Except light personal hand baggage carried inside passenger compartment) HK$ 6.`
        transInfoItem.info2DescCN = `1. 市区的士（红色）：首 2 公里HK$$ 24。<br>
                                    其後每 200 米／每分钟等候时间HK $ 1.7。 <br>
                                    在应收款额达$ 83.5後，然後为HK$1.2元。 <br>
                                    2. 新界的士（绿色）：首2公里HK$20.5元。 <br>
                                    其後每 200 米／每分钟等候时间HK $ 1.5。 <br>
                                    在应收款额达$ 83.5後，然後为HK$1.2元。 <br>
                                    3. 大屿山出租车（蓝色）：首2公里HK$19。<br>
                                    後续200米/每1分钟等候时间HK $ 1.5。 <br>
                                    应课税金额达到HK$$ 83.5，然後是1.4港元。 <br>
                                    对於所有的士类型，每件行李（摆放在乘客车厢内的轻便行李除外）HK $ 6。`
        transInfoItem.info2DescZH = `1. 市區的士（紅色）：首 2 公裡HK$$ 24。<br>
                                    其後每 200 米／每分鐘等候時間HK $ 1.7。 <br>
                                    在應收款額達$ 83.5後，然後為HK$1.2元。 <br>
                                    2. 新界的士（綠色）：首2公裡HK$20.5元。 <br>
                                    其後每 200 米／每分鐘等候時間HK $ 1.5。 <br>
                                    在應收款額達$ 83.5後，然後為HK$1.2元。 <br>
                                    3. 大嶼山出租車（藍色）：首2公裡HK$19。<br>
                                    後續200米/每1分鐘等候時間HK $ 1.5。 <br>
                                    應課稅金額達到HK$$ 83.5，然後是1.4港元。 <br>
                                    對於所有的士類型，每件行李（擺放在乘客車廂內的輕便行李除外）HK $ 6。`
        transInfoItem.info2Pic = 'https://vgy.me/1M94Iu.jpg'
        transInfoItem.info3Flag = true
        transInfoItem.info3HdrEN = 'Cross-harbour taxi stands'
        transInfoItem.info3HdrCN = '过海的士站'
        transInfoItem.info3HdrZH = '過海的士站'
        transInfoItem.info3DescEN = 'Passengers have to pay the tunnel toll and the return tunnel toll if crossing harbor between Hong Kong Island and Kowloon. But  the route commences from a cross-harbour taxi stand, only the single tunnel toll is charged. '
        transInfoItem.info3DescCN = '在港岛与九龙之间过海，乘客必须支付隧道费及回程费。 但是在过海的士站上车，只收取单程隧道费。'
        transInfoItem.info3DescZH = '在港島與九龍之間過海，乘客必須支付隧道費及回程費。 但是在過海的士站上車，只收取單程隧道費。'
        transInfoItem.info3Pic = 'https://vgy.me/CzPWg8.jpg'
        transInfoItem.info4Flag = false
        transInfoItem.info4HdrEN = ''
        transInfoItem.info4HdrCN = ''
        transInfoItem.info4HdrZH = ''
        transInfoItem.info4DescEN = ''
        transInfoItem.info4DescCN = ''
        transInfoItem.info4DescZH = ''
        transInfoItem.info4Pic = ''
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
        transInfoItem.appItemIdList.push("T005", "T006", "T007", "T008", "T015");
        transInfoItem.appItemList = null
        this.list.push(transInfoItem);
        transInfoItem = new InfoItem();
        transInfoItem.id = 'IT005'
        transInfoItem.infoHeaderEN = 'Ferry'
        transInfoItem.infoHeaderCN = '渡轮'
        transInfoItem.infoHeaderZH = '渡輪'
        transInfoItem.infoLogo = 'assets/img/info/trans/ferry.png'
        transInfoItem.info1Flag = true
        transInfoItem.info1HdrEN = 'Star Ferry'
        transInfoItem.info1HdrCN = '天星小轮'
        transInfoItem.info1HdrZH = '天星小輪'
        transInfoItem.info1DescEN = 'Star Ferry provides journeys between Hong Kong Island and Kowloon (Victoria Harbour) with low cost fares.'
        transInfoItem.info1DescCN = '天星小轮以低价票价，提供港岛与九龙之间（维多利亚港）的渡海小轮。'
        transInfoItem.info1DescZH = '天星小輪以低價票價，提供港島與九龍之間（維多利亞港）的渡海小輪。'
        transInfoItem.info1Pic = 'https://vgy.me/tuXOBp.jpg'
        transInfoItem.info2Flag = true
        transInfoItem.info2HdrEN = 'Harbour Cruise'
        transInfoItem.info2HdrCN = '维港游'
        transInfoItem.info2HdrZH = '維港遊'
        transInfoItem.info2DescEN = '1. DukLing Harbour Cruise: An authentic Chinese junk sailing into Victoria Harbour. 2. ICC Light Show & Symphony of Lights Harbour Cruise: For passengers who would like to watch the ICC light & music show and multi-media laser show (A Symphony of Lights) on board.'
        transInfoItem.info2DescCN = '1. 鸭灵号维港游: 中式帆船，畅游维多利亚港。 2. 幻彩咏香江维港游: 在观光轮及维港内观赏「幻彩咏香江」多媒体激光汇演。'
        transInfoItem.info2DescZH = '1. 鴨靈號維港遊: 中式帆船，暢遊維多利亞港。 2. 幻彩詠香江維港遊: 在觀光輪及維港內觀賞「幻彩詠香江」多媒體激光匯演。'
        transInfoItem.info2Pic = 'https://vgy.me/i197wN.jpg'
        transInfoItem.info3Flag = true
        transInfoItem.info3HdrEN = 'To Macau'
        transInfoItem.info3HdrCN = '到澳门'
        transInfoItem.info3HdrZH = '到澳門'
        transInfoItem.info3DescEN = `Many visitors will travel to Macau during visiting in Hong Kong. Macau is famous for the blend of Portuguese and Chinese cultures and its gambling industry (Casino). <br>
                                    There are two major ferry companies that provided frequent high-speed ferry services between Hong Kong  and Macau. <br>
                                    1. TurboJET  <br>
                                    2. Cotai Water Jet `
        transInfoItem.info3DescCN = `许多游客在香港访问期间会到澳门游览。 澳门以葡萄牙和中国文化融合及其赌博业（赌场）而闻名。 <br>
                                    两个主要的渡轮公司提供在香港和澳门之间频繁的高速渡轮服务。 <br>
                                    1. TurboJET <br>
                                    2. 金光飞航 `
        transInfoItem.info3DescZH = `許多游客在香港訪問期間會到澳門游覽。 澳門以葡萄牙和中國文化融合及其賭博業（賭場）而聞名。 <br>
                                    兩個主要的渡輪公司提供在香港和澳門之間頻繁的高速渡輪服務。 <br>
                                    1. TurboJET <br>
                                    2. 金光飛航 `
        transInfoItem.info3Pic = 'https://vgy.me/e7fIwv.jpg'
        transInfoItem.info4Flag = false
        transInfoItem.info4HdrEN = ''
        transInfoItem.info4HdrCN = ''
        transInfoItem.info4HdrZH = ''
        transInfoItem.info4DescEN = ''
        transInfoItem.info4DescCN = ''
        transInfoItem.info4DescZH = ''
        transInfoItem.info4Pic = ''
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
        transInfoItem.appItemIdList.push("T013", "T014");
        transInfoItem.appItemList = null

        this.list.push(transInfoItem);
        transInfoItem = new InfoItem();
    }

}