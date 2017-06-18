import { Injectable } from '@angular/core';
import { InfoItem } from "./InfoItem";

@Injectable()
export class EnterInfoItemList {

    public list: Array<InfoItem> = new Array();

    constructor() {
        this.init();
    }

    init() {

        let enterInfoItem = new InfoItem();
        enterInfoItem.id = 'IE001'
        enterInfoItem.infoHeaderEN = 'Theme Park'
        enterInfoItem.infoHeaderCN = '主题乐团'
        enterInfoItem.infoHeaderZH = '主題樂團'
        enterInfoItem.infoLogo = 'assets/img/info/entertain/park.png'
        enterInfoItem.info1Flag = true
        enterInfoItem.info1HdrEN = 'Ocean Park'
        enterInfoItem.info1HdrCN = '海洋公园'
        enterInfoItem.info1HdrZH = '海洋公園'
        enterInfoItem.info1DescEN = 'Ocean Park is located on the southern side of Hong Kong Island. It is a marine-life theme park featuring animals, thrill rides and shows. Traveler can go there by MTR (Ocean Park Station).'
        enterInfoItem.info1DescCN = '海洋公园位於港岛南面。 是一个海洋生物主题乐园，集娱乐丶表演及教育於一体。访客可以乘坐地铁（海洋公园站）去。'
        enterInfoItem.info1DescZH = '海洋公園位於港島南面。 是一個海洋生物主題樂園，集娛樂、表演及教育於一體。訪客可以乘坐地鐵（海洋公園站）去。'
        enterInfoItem.info1Pic = 'https://vgy.me/rjHFT6.jpg'
        enterInfoItem.info2Flag = true
        enterInfoItem.info2HdrEN = 'Hong Kong Disneyland'
        enterInfoItem.info2HdrCN = '香港迪士尼乐园'
        enterInfoItem.info2HdrZH = '香港迪士尼樂園'
        enterInfoItem.info2DescEN = `Hong Kong Disneyland is located on reclaimed land in Penny's Bay, Lantau Island. <br>
                                    The park consists of many themed areas: Main Street, U.S.A., Fantasyland, Adventureland, Tomorrowland, Grizzly Gulch, Mystic Point, Toy Story Land and Marvel area.`
        enterInfoItem.info2DescCN = `香港迪士尼乐园是位於香港新界大屿山香港迪士尼乐园度假区。<br>
                                    由许多主题区域组成：美国小镇大街丶探险世界丶幻想世界丶明日世界丶反斗奇兵大本营丶灰熊山谷丶迷离庄园及漫威主题区。`
        enterInfoItem.info2DescZH = `香港迪士尼樂園是位於香港新界大嶼山香港迪士尼樂園度假區。<br>
                                    由許多主題區域組成：美國小鎮大街、探險世界、幻想世界、明日世界、反斗奇兵大本營、灰熊山谷、迷離莊園及漫威主題區。`
        enterInfoItem.info2Pic = 'https://vgy.me/DdH3Ve.jpg'
        enterInfoItem.info3Flag = false
        enterInfoItem.info3HdrEN = ''
        enterInfoItem.info3HdrCN = ''
        enterInfoItem.info3HdrZH = ''
        enterInfoItem.info3DescEN = ''
        enterInfoItem.info3DescCN = ''
        enterInfoItem.info3DescZH = ''
        enterInfoItem.info3Pic = ''
        enterInfoItem.info4Flag = false
        enterInfoItem.info4HdrEN = ''
        enterInfoItem.info4HdrCN = ''
        enterInfoItem.info4HdrZH = ''
        enterInfoItem.info4DescEN = ''
        enterInfoItem.info4DescCN = ''
        enterInfoItem.info4DescZH = ''
        enterInfoItem.info4Pic = ''
        enterInfoItem.info5Flag = false
        enterInfoItem.info5HdrEN = ''
        enterInfoItem.info5HdrCN = ''
        enterInfoItem.info5HdrZH = ''
        enterInfoItem.info5DescEN = ''
        enterInfoItem.info5DescCN = ''
        enterInfoItem.info5DescZH = ''
        enterInfoItem.info5Pic = ''
        enterInfoItem.info6Flag = false
        enterInfoItem.info6HdrEN = ''
        enterInfoItem.info6HdrCN = ''
        enterInfoItem.info6HdrZH = ''
        enterInfoItem.info6DescEN = ''
        enterInfoItem.info6DescCN = ''
        enterInfoItem.info6DescZH = ''
        enterInfoItem.info6Pic = ''
        enterInfoItem.info7Flag = false
        enterInfoItem.info7HdrEN = ''
        enterInfoItem.info7HdrCN = ''
        enterInfoItem.info7HdrZH = ''
        enterInfoItem.info7DescEN = ''
        enterInfoItem.info7DescCN = ''
        enterInfoItem.info7DescZH = ''
        enterInfoItem.info7Pic = ''
        enterInfoItem.infoAppFlag = true
        enterInfoItem.appItemIdList.push("");
        enterInfoItem.appItemList = null

        this.list.push(enterInfoItem);
        enterInfoItem = new InfoItem();

        enterInfoItem.id = 'IE002'
        enterInfoItem.infoHeaderEN = 'Hiking'
        enterInfoItem.infoHeaderCN = '远足'
        enterInfoItem.infoHeaderZH = '遠足'
        enterInfoItem.infoLogo = 'assets/img/info/entertain/hiking.png'
        enterInfoItem.info1Flag = true
        enterInfoItem.info1HdrEN = 'Tung Chung to Tai O'
        enterInfoItem.info1HdrCN = '东涌至大澳'
        enterInfoItem.info1HdrZH = '東涌至大澳'
        enterInfoItem.info1DescEN = `On Lantau Island, start at Tung Chung and end in Tai O. <br>
                                    Pass temples and bays and a centuries-old fishing village.`
        enterInfoItem.info1DescCN = `在大屿山，从东涌开始。<br>
                                    在大澳结束，通过寺庙和海湾，以及数百年的渔村。`
        enterInfoItem.info1DescZH = `在大嶼山，從東湧開始。<br>
                                    在大澳結束，通過寺廟和海灣，以及數百年的漁村。`
        enterInfoItem.info1Pic = 'https://vgy.me/VomsN7.jpg'
        enterInfoItem.info2Flag = true
        enterInfoItem.info2HdrEN = 'Lamma Island'
        enterInfoItem.info2HdrCN = '南丫岛'
        enterInfoItem.info2HdrZH = '南丫島'
        enterInfoItem.info2DescEN = `On Lamma Island (traditional fishing village), start at Sok Kwu Wan and end in Yung Shue Wan. <br>
                                    Pass temples and beaches and Lamma Winds (wind turbine).`
        enterInfoItem.info2DescCN = `在南丫岛（传统渔村），从索鼓湾开始，在榕树湾结束。<br>
                                    通过寺庙和海滩和南丫风采发电站（风力发电机）。`
        enterInfoItem.info2DescZH = `在南丫島（傳統漁村），從索鼓灣開始，在榕樹灣結束。<br>
                                    通過寺廟和海灘和南丫風采發電站（風力發電機）。`
        enterInfoItem.info2Pic = 'https://vgy.me/HPoF9l.jpg'
        enterInfoItem.info3Flag = true
        enterInfoItem.info3HdrEN = 'Peak Circle Walk'
        enterInfoItem.info3HdrCN = '山顶环回步行径'
        enterInfoItem.info3HdrZH = '山頂環迴步行徑'
        enterInfoItem.info3DescEN = `On The Peak, Peak Circle Walk provides different views around the highest point on Hong Kong Island.`
        enterInfoItem.info3DescCN = `山顶上的山顶环回步行径提供港岛的不同景观。`
        enterInfoItem.info3DescZH = `山頂上的山頂環迴步行徑提供港島的不同景觀。`
        enterInfoItem.info3Pic = 'https://vgy.me/ujIO33.jpg'
        enterInfoItem.info4Flag = false
        enterInfoItem.info4HdrEN = ''
        enterInfoItem.info4HdrCN = ''
        enterInfoItem.info4HdrZH = ''
        enterInfoItem.info4DescEN = ''
        enterInfoItem.info4DescCN = ''
        enterInfoItem.info4DescZH = ''
        enterInfoItem.info4Pic = ''
        enterInfoItem.info5Flag = false
        enterInfoItem.info5HdrEN = ''
        enterInfoItem.info5HdrCN = ''
        enterInfoItem.info5HdrZH = ''
        enterInfoItem.info5DescEN = ''
        enterInfoItem.info5DescCN = ''
        enterInfoItem.info5DescZH = ''
        enterInfoItem.info5Pic = ''
        enterInfoItem.info6Flag = false
        enterInfoItem.info6HdrEN = ''
        enterInfoItem.info6HdrCN = ''
        enterInfoItem.info6HdrZH = ''
        enterInfoItem.info6DescEN = ''
        enterInfoItem.info6DescCN = ''
        enterInfoItem.info6DescZH = ''
        enterInfoItem.info6Pic = ''
        enterInfoItem.info7Flag = false
        enterInfoItem.info7HdrEN = ''
        enterInfoItem.info7HdrCN = ''
        enterInfoItem.info7HdrZH = ''
        enterInfoItem.info7DescEN = ''
        enterInfoItem.info7DescCN = ''
        enterInfoItem.info7DescZH = ''
        enterInfoItem.info7Pic = ''
        enterInfoItem.infoAppFlag = true
        enterInfoItem.appItemIdList.push("E002", "E003");
        enterInfoItem.appItemList = null

        this.list.push(enterInfoItem);
        enterInfoItem = new InfoItem();
    }

}