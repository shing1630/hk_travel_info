import { Injectable } from '@angular/core';
import { InfoItem } from "./InfoItem";

@Injectable()
export class AccomInfoItemList {

    public list: Array<InfoItem> = new Array();

    constructor() {
        this.init();
    }

    init() {

        let accomInfoItem = new InfoItem();
        accomInfoItem.id = 'IA001'
        accomInfoItem.infoHeaderEN = 'Location'
        accomInfoItem.infoHeaderCN = '地点'
        accomInfoItem.infoHeaderZH = '地點'
        accomInfoItem.infoLogo = 'assets/img/info/accom/location.png'
        accomInfoItem.info1Flag = true
        accomInfoItem.info1HdrEN = 'Popular areas - 1'
        accomInfoItem.info1HdrCN = '受欢迎地点 - 1'
        accomInfoItem.info1HdrZH = '受歡迎地點 - 1'
        accomInfoItem.info1DescEN = 'Tsim Sha Tsui (TST) - Located at Kowloon with lots of hotels. Close to Victoria Harbour, Avenue of Stars and Nathan Road with famous restaurants, and shopping malls.'
        accomInfoItem.info1DescCN = '尖沙咀（TST）- 位於九龙。有大量酒店选择。 靠近维多利亚港，星光大道和弥敦道。附近有着名的餐厅和商场。'
        accomInfoItem.info1DescZH = '尖沙咀（TST）- 位於九龍。有大量酒店選擇。 靠近維多利亞港，星光大道和彌敦道。附近有著名的餐廳和商場。'
        accomInfoItem.info1Pic = 'https://vgy.me/yjbEBo.jpg'
        accomInfoItem.info2Flag = true
        accomInfoItem.info2HdrEN = 'Popular areas - 2'
        accomInfoItem.info2HdrCN = '受欢迎地点 - 2'
        accomInfoItem.info2HdrZH = '受歡迎地點 - 2'
        accomInfoItem.info2DescEN = 'Central - Located at Hong Kong Island. This region is a financial core of Hong Kong. Near Lan Kwai Fong and Soho where people go to drink and clubbing. '
        accomInfoItem.info2DescCN = '中环 - 位於香港岛。是香港的经济核心。近兰桂坊和Soho，充满酒吧丶夜店和餐厅的地方。'
        accomInfoItem.info2DescZH = '中環 - 位於香港島。是香港的經濟核心。近蘭桂坊和Soho，充滿酒吧、夜店和餐廳的地方。'
        accomInfoItem.info2Pic = 'https://vgy.me/s5TNau.jpg'
        accomInfoItem.info3Flag = true
        accomInfoItem.info3HdrEN = 'Popular areas - 3'
        accomInfoItem.info3HdrCN = '受欢迎地点 - 3'
        accomInfoItem.info3HdrZH = '受歡迎地點 - 3'
        accomInfoItem.info3DescEN = 'Causeway Bay - Located at Hong Kong Island. Major shopping districts and lot of famous restaurants.'
        accomInfoItem.info3DescCN = '铜锣湾 - 位於香港岛。 主要购物区和众多着名餐厅。'
        accomInfoItem.info3DescZH = '銅鑼灣 - 位於香港島。 主要購物區和眾多著名餐廳。'
        accomInfoItem.info3Pic = 'https://vgy.me/hXdD8Y.jpg'
        accomInfoItem.info4Flag = true
        accomInfoItem.info4HdrEN = 'Popular areas - 4'
        accomInfoItem.info4HdrCN = '受欢迎地点 - 4'
        accomInfoItem.info4HdrZH = '受歡迎地點 - 4'
        accomInfoItem.info4DescEN = 'Mong Kok - Located at Kowloon. High population density and lots of local shops, markets and food stalls.'
        accomInfoItem.info4DescCN = '旺角 - 位於九龙。人口密度高。多当地商店，市场和小食摊位。'
        accomInfoItem.info4DescZH = '旺角 - 位於九龍。人口密度高。多當地商店，市場和小食攤位。'
        accomInfoItem.info4Pic = 'https://vgy.me/gP4yoP.jpg'
        accomInfoItem.info5Flag = false
        accomInfoItem.info5HdrEN = ''
        accomInfoItem.info5HdrCN = ''
        accomInfoItem.info5HdrZH = ''
        accomInfoItem.info5DescEN = ''
        accomInfoItem.info5DescCN = ''
        accomInfoItem.info5DescZH = ''
        accomInfoItem.info5Pic = ''
        accomInfoItem.info6Flag = false
        accomInfoItem.info6HdrEN = ''
        accomInfoItem.info6HdrCN = ''
        accomInfoItem.info6HdrZH = ''
        accomInfoItem.info6DescEN = ''
        accomInfoItem.info6DescCN = ''
        accomInfoItem.info6DescZH = ''
        accomInfoItem.info6Pic = ''
        accomInfoItem.info7Flag = false
        accomInfoItem.info7HdrEN = ''
        accomInfoItem.info7HdrCN = ''
        accomInfoItem.info7HdrZH = ''
        accomInfoItem.info7DescEN = ''
        accomInfoItem.info7DescCN = ''
        accomInfoItem.info7DescZH = ''
        accomInfoItem.info7Pic = ''
        accomInfoItem.infoAppFlag = true
        accomInfoItem.appItemIdList.push("A001", "A002");
        accomInfoItem.appItemList = null

        this.list.push(accomInfoItem);
        accomInfoItem = new InfoItem();

        accomInfoItem.id = 'IA002'
        accomInfoItem.infoHeaderEN = 'Youth Hostel'
        accomInfoItem.infoHeaderCN = '青年旅舍'
        accomInfoItem.infoHeaderZH = '青年旅舍'
        accomInfoItem.infoLogo = 'assets/img/info/accom/youth.png'
        accomInfoItem.info1Flag = true
        accomInfoItem.info1HdrEN = 'YMCA and HKYHA'
        accomInfoItem.info1HdrCN = 'YMCA 和 HKYHA'
        accomInfoItem.info1HdrZH = 'YMCA 和 HKYHA'
        accomInfoItem.info1DescEN = `There are two associations provide youth hostels in Hong Kong. <br>
                                    1. Young Men's Christian Association (YMCA) <br>
                                    2. Hong Kong Youth Hostels Association (HKYHA). <br>
                                    Unfortunately, most of the youth hostels are located in rural areas (the New Territories). Some hostels which are located in urban areas akin to a hotel more than a hostel.`
        accomInfoItem.info1DescCN = `两个协会在香港提供青年旅舍。 <br>
                                    1. 香港中华基督教青年会（YMCA）<br>
                                    2. 香港青年旅舍协会（HKYHA） <br>
                                    但大部分青年旅舍都位於郊区（新界）。 一些位於市区的旅舍，设施与房租跟酒店相若。`
        accomInfoItem.info1DescZH = `兩個協會在香港提供青年旅舍。 <br>
                                    1. 香港中華基督教青年會（YMCA）<br>
                                    2. 香港青年旅舍協會（HKYHA） <br>
                                    但大部分青年旅舍都位於郊區（新界）。 一些位於市區的旅舍，設施與房租跟酒店相若。`
        accomInfoItem.info1Pic = 'https://vgy.me/yYPD8i.jpg'
        accomInfoItem.info2Flag = true
        accomInfoItem.info2HdrEN = 'YHA Mei Ho House Youth Hostel'
        accomInfoItem.info2HdrCN = 'YHA美荷楼青年旅舍'
        accomInfoItem.info2HdrZH = 'YHA美荷樓青年旅舍'
        accomInfoItem.info2DescEN = 'A special youth hostel that renovated by H-shaped resettlement block built in 1954. There are nostalgic themed rooms, styled café and a heritage museum to introduce the local culture.'
        accomInfoItem.info2DescCN = '由「H型」徙置大厦活化而成的青年旅舍。提供怀旧主题房丶怀旧冰室及特色博物馆「美荷楼生活馆」，让你验本地文化。'
        accomInfoItem.info2DescZH = '由「H型」徙置大廈活化而成的青年旅舍。提供懷舊主題房、懷舊冰室及特色博物館「美荷樓生活館」，讓你驗本地文化。'
        accomInfoItem.info2Pic = 'https://vgy.me/tidEoJ.jpg'
        accomInfoItem.info3Flag = false
        accomInfoItem.info3HdrEN = ''
        accomInfoItem.info3HdrCN = ''
        accomInfoItem.info3HdrZH = ''
        accomInfoItem.info3DescEN = ''
        accomInfoItem.info3DescCN = ''
        accomInfoItem.info3DescZH = ''
        accomInfoItem.info3Pic = ''
        accomInfoItem.info4Flag = false
        accomInfoItem.info4HdrEN = ''
        accomInfoItem.info4HdrCN = ''
        accomInfoItem.info4HdrZH = ''
        accomInfoItem.info4DescEN = ''
        accomInfoItem.info4DescCN = ''
        accomInfoItem.info4DescZH = ''
        accomInfoItem.info4Pic = ''
        accomInfoItem.info5Flag = false
        accomInfoItem.info5HdrEN = ''
        accomInfoItem.info5HdrCN = ''
        accomInfoItem.info5HdrZH = ''
        accomInfoItem.info5DescEN = ''
        accomInfoItem.info5DescCN = ''
        accomInfoItem.info5DescZH = ''
        accomInfoItem.info5Pic = ''
        accomInfoItem.info6Flag = false
        accomInfoItem.info6HdrEN = ''
        accomInfoItem.info6HdrCN = ''
        accomInfoItem.info6HdrZH = ''
        accomInfoItem.info6DescEN = ''
        accomInfoItem.info6DescCN = ''
        accomInfoItem.info6DescZH = ''
        accomInfoItem.info6Pic = ''
        accomInfoItem.info7Flag = false
        accomInfoItem.info7HdrEN = ''
        accomInfoItem.info7HdrCN = ''
        accomInfoItem.info7HdrZH = ''
        accomInfoItem.info7DescEN = ''
        accomInfoItem.info7DescCN = ''
        accomInfoItem.info7DescZH = ''
        accomInfoItem.info7Pic = ''
        accomInfoItem.infoAppFlag = false
        accomInfoItem.appItemIdList = null
        accomInfoItem.appItemList = null

        this.list.push(accomInfoItem);
        accomInfoItem = new InfoItem();
    }

}