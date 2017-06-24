import { Injectable } from '@angular/core';
import { InfoItem } from "./InfoItem";

@Injectable()
export class UtilityInfoItemList {

    public list: Array<InfoItem> = new Array();

    constructor() {
        this.init();
    }

    init() {

        let utilityInfoItem = new InfoItem();
        utilityInfoItem.id = 'IU001'
        utilityInfoItem.infoHeaderEN = 'Wi-Fi'
        utilityInfoItem.infoHeaderCN = 'Wi-Fi'
        utilityInfoItem.infoHeaderZH = 'Wi-Fi'
        utilityInfoItem.infoLogo = 'assets/img/info/utility/wifi.png'
        utilityInfoItem.info1Flag = true
        utilityInfoItem.info1HdrEN = 'Free Wi-Fi'
        utilityInfoItem.info1HdrCN = '免费Wi-Fi'
        utilityInfoItem.info1HdrZH = '免費Wi-Fi'
        utilityInfoItem.info1DescEN = `There are many Wi-Fi.HK in Hong Kong such as major tourist attractions, shopping malls, parks and government buildings, which offer free Wi-Fi service for a period of time.  `
        utilityInfoItem.info1DescCN = `香港有很多Wi-Fi.HK，如主要的旅游景点，商场，公园和政府大楼，会提供一段时间的免费Wi-Fi服务。`
        utilityInfoItem.info1DescZH = `香港有很多Wi-Fi.HK，如主要的旅遊景點，商場，公園和政府大樓，會提供一段時間的免費Wi-Fi服務。`
        utilityInfoItem.info1Pic = 'https://vgy.me/DRLomY.jpg'
        utilityInfoItem.info2Flag = false
        utilityInfoItem.info2HdrEN = ''
        utilityInfoItem.info2HdrCN = ''
        utilityInfoItem.info2HdrZH = ''
        utilityInfoItem.info2DescEN = ''
        utilityInfoItem.info2DescCN = ''
        utilityInfoItem.info2DescZH = ''
        utilityInfoItem.info2Pic = ''
        utilityInfoItem.info3Flag = false
        utilityInfoItem.info3HdrEN = ''
        utilityInfoItem.info3HdrCN = ''
        utilityInfoItem.info3HdrZH = ''
        utilityInfoItem.info3DescEN = ''
        utilityInfoItem.info3DescCN = ''
        utilityInfoItem.info3DescZH = ''
        utilityInfoItem.info3Pic = ''
        utilityInfoItem.info4Flag = false
        utilityInfoItem.info4HdrEN = ''
        utilityInfoItem.info4HdrCN = ''
        utilityInfoItem.info4HdrZH = ''
        utilityInfoItem.info4DescEN = ''
        utilityInfoItem.info4DescCN = ''
        utilityInfoItem.info4DescZH = ''
        utilityInfoItem.info4Pic = ''
        utilityInfoItem.info5Flag = false
        utilityInfoItem.info5HdrEN = ''
        utilityInfoItem.info5HdrCN = ''
        utilityInfoItem.info5HdrZH = ''
        utilityInfoItem.info5DescEN = ''
        utilityInfoItem.info5DescCN = ''
        utilityInfoItem.info5DescZH = ''
        utilityInfoItem.info5Pic = ''
        utilityInfoItem.info6Flag = false
        utilityInfoItem.info6HdrEN = ''
        utilityInfoItem.info6HdrCN = ''
        utilityInfoItem.info6HdrZH = ''
        utilityInfoItem.info6DescEN = ''
        utilityInfoItem.info6DescCN = ''
        utilityInfoItem.info6DescZH = ''
        utilityInfoItem.info6Pic = ''
        utilityInfoItem.info7Flag = false
        utilityInfoItem.info7HdrEN = ''
        utilityInfoItem.info7HdrCN = ''
        utilityInfoItem.info7HdrZH = ''
        utilityInfoItem.info7DescEN = ''
        utilityInfoItem.info7DescCN = ''
        utilityInfoItem.info7DescZH = ''
        utilityInfoItem.info7Pic = ''
        utilityInfoItem.infoAppFlag = true
        utilityInfoItem.appItemIdList.push("U004", "U005");
        utilityInfoItem.appItemList = null

        this.list.push(utilityInfoItem);
        utilityInfoItem = new InfoItem();

        utilityInfoItem.id = 'IU002'
        utilityInfoItem.infoHeaderEN = 'Toilet (Washroom)'
        utilityInfoItem.infoHeaderCN = '洗手间 (卫生间)'
        utilityInfoItem.infoHeaderZH = '洗手間 (衛生間)'
        utilityInfoItem.infoLogo = 'assets/img/info/utility/toilet.png'
        utilityInfoItem.info1Flag = true
        utilityInfoItem.info1HdrEN = 'Public Toilet'
        utilityInfoItem.info1HdrCN = '公众厕所'
        utilityInfoItem.info1HdrZH = '公眾廁所'
        utilityInfoItem.info1DescEN = `No paid toilet in Hong Kong.<br>
                                        All malls, hotels and tourist attractions have toilets for public use.<br>
                                        However, some restaurants provide toilets for their customers only.`
        utilityInfoItem.info1DescCN = `香港没有付费厕所。<br>
                                        所有商场，酒店和旅游景点都有厕所供公众使用。<br>
                                        然而，一些餐厅只为客户提供厕所。`
        utilityInfoItem.info1DescZH = `香港沒有付費廁所。<br>
                                        所有商場，酒店和旅遊景點都有廁所供公眾使用。<br>
                                        然而，一些餐廳只為客戶提供廁所。`
        utilityInfoItem.info1Pic = 'https://vgy.me/dJRkvv.jpg'
        utilityInfoItem.info2Flag = false
        utilityInfoItem.info2HdrEN = ''
        utilityInfoItem.info2HdrCN = ''
        utilityInfoItem.info2HdrZH = ''
        utilityInfoItem.info2DescEN = ''
        utilityInfoItem.info2DescCN = ''
        utilityInfoItem.info2DescZH = ''
        utilityInfoItem.info2Pic = ''
        utilityInfoItem.info3Flag = false
        utilityInfoItem.info3HdrEN = ''
        utilityInfoItem.info3HdrCN = ''
        utilityInfoItem.info3HdrZH = ''
        utilityInfoItem.info3DescEN = ''
        utilityInfoItem.info3DescCN = ''
        utilityInfoItem.info3DescZH = ''
        utilityInfoItem.info3Pic = ''
        utilityInfoItem.info4Flag = false
        utilityInfoItem.info4HdrEN = ''
        utilityInfoItem.info4HdrCN = ''
        utilityInfoItem.info4HdrZH = ''
        utilityInfoItem.info4DescEN = ''
        utilityInfoItem.info4DescCN = ''
        utilityInfoItem.info4DescZH = ''
        utilityInfoItem.info4Pic = ''
        utilityInfoItem.info5Flag = false
        utilityInfoItem.info5HdrEN = ''
        utilityInfoItem.info5HdrCN = ''
        utilityInfoItem.info5HdrZH = ''
        utilityInfoItem.info5DescEN = ''
        utilityInfoItem.info5DescCN = ''
        utilityInfoItem.info5DescZH = ''
        utilityInfoItem.info5Pic = ''
        utilityInfoItem.info6Flag = false
        utilityInfoItem.info6HdrEN = ''
        utilityInfoItem.info6HdrCN = ''
        utilityInfoItem.info6HdrZH = ''
        utilityInfoItem.info6DescEN = ''
        utilityInfoItem.info6DescCN = ''
        utilityInfoItem.info6DescZH = ''
        utilityInfoItem.info6Pic = ''
        utilityInfoItem.info7Flag = false
        utilityInfoItem.info7HdrEN = ''
        utilityInfoItem.info7HdrCN = ''
        utilityInfoItem.info7HdrZH = ''
        utilityInfoItem.info7DescEN = ''
        utilityInfoItem.info7DescCN = ''
        utilityInfoItem.info7DescZH = ''
        utilityInfoItem.info7Pic = ''
        utilityInfoItem.infoAppFlag = true
        utilityInfoItem.appItemIdList.push("U002", "U003");
        utilityInfoItem.appItemList = null
        this.list.push(utilityInfoItem);
        utilityInfoItem = new InfoItem();
    }

}