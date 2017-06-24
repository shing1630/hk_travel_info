import { Injectable } from '@angular/core';
import { InfoItem } from "./InfoItem";

@Injectable()
export class DiningInfoItemList {

    public list: Array<InfoItem> = new Array();

    constructor() {
        this.init();
    }

    init() {

        let diningInfoItem = new InfoItem();
        diningInfoItem.id = 'ID001'
        diningInfoItem.infoHeaderEN = 'Cantonese Restaurant (Tea House)'
        diningInfoItem.infoHeaderCN = '茶楼 (酒楼)'
        diningInfoItem.infoHeaderZH = '茶樓 (酒樓)'
        diningInfoItem.infoLogo = 'assets/img/info/dining/cantonese.png'
        diningInfoItem.info1Flag = true
        diningInfoItem.info1HdrEN = 'Dim Sum'
        diningInfoItem.info1HdrCN = '点心'
        diningInfoItem.info1HdrZH = '點心'
        diningInfoItem.info1DescEN = 'Normally Cantonese restaurants serve dim sum from morning to lunch. But some restaurants serve dim sum all day. '
        diningInfoItem.info1DescCN = '通常茶楼会从早餐到午餐供应点心。 但有些餐厅全天供应点心。'
        diningInfoItem.info1DescZH = '通常茶樓會從早餐到午餐供應點心。 但有些餐廳全天供應點心。'
        diningInfoItem.info1Pic = 'https://vgy.me/7gzXgl.jpg'
        diningInfoItem.info2Flag = true
        diningInfoItem.info2HdrEN = 'Ordering'
        diningInfoItem.info2HdrCN = '点菜'
        diningInfoItem.info2HdrZH = '點菜'
        diningInfoItem.info2DescEN = 'Traditionally, Dim sum is ordered from trolleys that circulate around the restaurant. But nowadays, Dim sum is ordered from a paper menu that customers write down the number of each dim sum type and then pass it to staff for ordering.'
        diningInfoItem.info2DescCN = '传统上，点心手推车会在荼楼内游走，食客可在附近的手推车直接点选。但现在，大多数是从点心纸中点选每个点心类型的数量，再交给职员下单。'
        diningInfoItem.info2DescZH = '傳統上，點心手推車會在荼樓內遊走，食客可在附近的手推車直接點選。但現在，大多數是從點心紙中點選每個點心類型的數量，再交給職員下單。'
        diningInfoItem.info2Pic = 'https://vgy.me/a2pGVY.jpg'
        diningInfoItem.info3Flag = true
        diningInfoItem.info3HdrEN = 'Extra Charge'
        diningInfoItem.info3HdrCN = '附加费'
        diningInfoItem.info3HdrZH = '附加費'
        diningInfoItem.info3DescEN = `There are extra charges in Cantonese restaurants. <br>
                                    1. Tea (Cover) charge around HK$6-20 per person. <br>
                                    2. 10% Service charge. <br>
                                    PS: Some restaurants may apply no service charge and no tea charge policies to attract customers. `
        diningInfoItem.info3DescCN = `茶楼附加费。<br>
                                    1. 茶位费每人约 HK$6-20。 <br>
                                    2. 10％ 服务费。 <br>
                                    PS: 一些餐厅可能不需要服务费，也不需要收取茶位费来吸引顾客。`
        diningInfoItem.info3DescZH = `茶樓附加費。<br>
                                    1. 茶位費每人約 HK$6-20。 <br>
                                    2. 10％ 服務費。 <br>
                                    PS: 一些餐廳可能不需要服務費，也不需要收取茶位費來吸引顧客。`
        diningInfoItem.info3Pic = 'https://vgy.me/hkfx4S.jpg'
        diningInfoItem.info4Flag = false
        diningInfoItem.info4HdrEN = ''
        diningInfoItem.info4HdrCN = ''
        diningInfoItem.info4HdrZH = ''
        diningInfoItem.info4DescEN = ''
        diningInfoItem.info4DescCN = ''
        diningInfoItem.info4DescZH = ''
        diningInfoItem.info4Pic = ''
        diningInfoItem.info5Flag = false
        diningInfoItem.info5HdrEN = ''
        diningInfoItem.info5HdrCN = ''
        diningInfoItem.info5HdrZH = ''
        diningInfoItem.info5DescEN = ''
        diningInfoItem.info5DescCN = ''
        diningInfoItem.info5DescZH = ''
        diningInfoItem.info5Pic = ''
        diningInfoItem.info6Flag = false
        diningInfoItem.info6HdrEN = ''
        diningInfoItem.info6HdrCN = ''
        diningInfoItem.info6HdrZH = ''
        diningInfoItem.info6DescEN = ''
        diningInfoItem.info6DescCN = ''
        diningInfoItem.info6DescZH = ''
        diningInfoItem.info6Pic = ''
        diningInfoItem.info7Flag = false
        diningInfoItem.info7HdrEN = ''
        diningInfoItem.info7HdrCN = ''
        diningInfoItem.info7HdrZH = ''
        diningInfoItem.info7DescEN = ''
        diningInfoItem.info7DescCN = ''
        diningInfoItem.info7DescZH = ''
        diningInfoItem.info7Pic = ''
        diningInfoItem.infoAppFlag = true
        diningInfoItem.appItemIdList.push("D001", "D002", "D003");
        diningInfoItem.appItemList = null

        this.list.push(diningInfoItem);
        diningInfoItem = new InfoItem();

        diningInfoItem.id = 'ID002'
        diningInfoItem.infoHeaderEN = 'Street Food (Local Snacks)'
        diningInfoItem.infoHeaderCN = '街头小食'
        diningInfoItem.infoHeaderZH = '街頭小食'
        diningInfoItem.infoLogo = 'assets/img/info/dining/street.png'
        diningInfoItem.info1Flag = true
        diningInfoItem.info1HdrEN = 'Location'
        diningInfoItem.info1HdrCN = '地点'
        diningInfoItem.info1HdrZH = '地點'
        diningInfoItem.info1DescEN = 'Street food can be found throughout the city, especially around Mong Kok, Prince Edward, Tsim Sha Tsui and Causeway Bay.'
        diningInfoItem.info1DescCN = '整个城市都可以找到街头小食。但在旺角，太子，尖沙咀和铜锣湾最为集中。'
        diningInfoItem.info1DescZH = '整個城市都可以找到街頭小食。但在旺角，太子，尖沙咀和銅鑼灣最為集中。'
        diningInfoItem.info1Pic = 'https://vgy.me/csnvE1.jpg'
        diningInfoItem.info2Flag = true
        diningInfoItem.info2HdrEN = 'Must eat - 1'
        diningInfoItem.info2HdrCN = '必吃 - 1'
        diningInfoItem.info2HdrZH = '必吃 - 1'
        diningInfoItem.info2DescEN = `Fishballs: Made from fish-paste and usually served in curry. <br>
                                    Egg waffles: Made from Eggs, sugar, flour, evaporated milk. Also known as Bubble Waffle. `
        diningInfoItem.info2DescCN = `鱼蛋：由鱼肉加淀粉制成，通常以咖哩汤料烹调。 <br>
                                    鸡蛋仔：以鸡蛋丶砂糖丶牛油丶面粉和淡奶制成。 制成後呈金黄色。`
        diningInfoItem.info2DescZH = `魚蛋：由魚肉加澱粉制成，通常以咖哩湯料烹調。 <br>
                                    雞蛋仔：以雞蛋、砂糖、牛油、面粉和淡奶制成。 制成後呈金黃色。`
        diningInfoItem.info2Pic = 'https://vgy.me/PONG0q.jpg'
        diningInfoItem.info3Flag = true
        diningInfoItem.info3HdrEN = 'Must eat - 2'
        diningInfoItem.info3HdrCN = '必吃 - 2'
        diningInfoItem.info3HdrZH = '必吃 - 2'
        diningInfoItem.info3DescEN = `Siu mai: Usually made from fish meat and pork. Different from the dim sum served in Cantonese restaurants. <br>
                                    Egg tarts: Usually made from a rich custard (Flour, butter, sugar, egg, milk). `
        diningInfoItem.info3DescCN = `烧卖：通常由鱼肉和猪肉制成。 不同於茶楼的点心。<br>
                                    蛋挞：通常由丰富的奶油（面粉，黄油，糖，蛋，牛奶）制成。`
        diningInfoItem.info3DescZH = `燒賣：通常由魚肉和豬肉制成。 不同於茶樓的點心。<br>
                                    蛋撻：通常由豐富的奶油（面粉，黃油，糖，蛋，牛奶）制成。`
        diningInfoItem.info3Pic = 'https://vgy.me/FQj8vl.jpg'
        diningInfoItem.info4Flag = true
        diningInfoItem.info4HdrEN = 'Must eat - 3'
        diningInfoItem.info4HdrCN = '必吃 - 3'
        diningInfoItem.info4HdrZH = '必吃 - 3'
        diningInfoItem.info4DescEN = `Put chai ko: Usually made from steamed sugar with any one of the beans. Like pudding cake with palm size. Sweet in taste.  <br>
                                    Stinky tofu: Made from fermented tofu. Deep-fried and has a strong odor. `
        diningInfoItem.info4DescCN = `砵仔糕：以黄糖丶粘米粉等加入红豆造成。 一般以半碗为单位，味道甜，口感弹牙。 <br>
                                    臭豆腐：由发酵豆腐制成。 油炸，气味强烈。`
        diningInfoItem.info4DescZH = `砵仔糕：以黃糖、粘米粉等加入紅豆造成。 一般以半碗為單位，味道甜，口感彈牙。 <br>
                                    臭豆腐：由發酵豆腐制成。 油炸，氣味強烈。`
        diningInfoItem.info4Pic = 'https://vgy.me/sWUC8s.jpg'
        diningInfoItem.info5Flag = false
        diningInfoItem.info5HdrEN = ''
        diningInfoItem.info5HdrCN = ''
        diningInfoItem.info5HdrZH = ''
        diningInfoItem.info5DescEN = ''
        diningInfoItem.info5DescCN = ''
        diningInfoItem.info5DescZH = ''
        diningInfoItem.info5Pic = ''
        diningInfoItem.info6Flag = false
        diningInfoItem.info6HdrEN = ''
        diningInfoItem.info6HdrCN = ''
        diningInfoItem.info6HdrZH = ''
        diningInfoItem.info6DescEN = ''
        diningInfoItem.info6DescCN = ''
        diningInfoItem.info6DescZH = ''
        diningInfoItem.info6Pic = ''
        diningInfoItem.info7Flag = false
        diningInfoItem.info7HdrEN = ''
        diningInfoItem.info7HdrCN = ''
        diningInfoItem.info7HdrZH = ''
        diningInfoItem.info7DescEN = ''
        diningInfoItem.info7DescCN = ''
        diningInfoItem.info7DescZH = ''
        diningInfoItem.info7Pic = ''
        diningInfoItem.infoAppFlag = true
        diningInfoItem.appItemIdList.push("D001", "D003");
        diningInfoItem.appItemList = null
        this.list.push(diningInfoItem);
        diningInfoItem = new InfoItem();
    }

}