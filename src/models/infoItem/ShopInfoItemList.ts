import { Injectable } from '@angular/core';
import { InfoItem } from "./InfoItem";

@Injectable()
export class ShopInfoItemList {

    public list: Array<InfoItem> = new Array();

    constructor() {
        this.init();
    }

    init() {

        let shopInfoItem = new InfoItem();
        shopInfoItem.id = 'IS001'
        shopInfoItem.infoHeaderEN = 'Mall'
        shopInfoItem.infoHeaderCN = '商场（购物中心）'
        shopInfoItem.infoHeaderZH = '商場（購物中心）'
        shopInfoItem.infoLogo = 'assets/img/info/shopping/mall.png'
        shopInfoItem.info1Flag = true
        shopInfoItem.info1HdrEN = 'Location'
        shopInfoItem.info1HdrCN = '地点'
        shopInfoItem.info1HdrZH = '地點'
        shopInfoItem.info1DescEN = 'There are so many malls in Hong Kong and they are all close to MTR (subway). Especially around Mongkok, Tsim Sha Tsui and Causeway Bay MTR stations.'
        shopInfoItem.info1DescCN = '大多数商场都靠近地铁， 特别是在旺角丶尖沙咀和铜锣湾地铁站附近。'
        shopInfoItem.info1DescZH = '大多數商場都靠近地鐵， 特別是在旺角、尖沙咀和銅鑼灣地鐵站附近。'
        shopInfoItem.info1Pic = 'https://vgy.me/lI1SQ2.jpg'
        shopInfoItem.info2Flag = true
        shopInfoItem.info2HdrEN = 'Quality Tourism Services (QTS)'
        shopInfoItem.info2HdrCN = '优质旅游服务（QTS）'
        shopInfoItem.info2HdrZH = '優質旅遊服務（QTS）'
        shopInfoItem.info2DescEN = 'Under the Quality Tourism Services (QTS) Scheme, shops must provide clearly displayed prices with clear product information and ensure superb customer services. Customers can recognize the QTS sign on their shop windows.'
        shopInfoItem.info2DescCN = '在优质旅游服务（QTS）计划下，店铺必须提供明确的价格，明确的产品信息并确保优质的客户服务。 客户可以在商店橱窗上识别QTS的标志。'
        shopInfoItem.info2DescZH = '在優質旅遊服務（QTS）計劃下，店鋪必須提供明確的價格，明確的產品信息並確保優質的客戶服務。 客戶可以在商店櫥窗上識別QTS的標誌。'
        shopInfoItem.info2Pic = 'https://vgy.me/ltSqsM.jpg'
        shopInfoItem.info3Flag = false
        shopInfoItem.info3HdrEN = ''
        shopInfoItem.info3HdrCN = ''
        shopInfoItem.info3HdrZH = ''
        shopInfoItem.info3DescEN = ''
        shopInfoItem.info3DescCN = ''
        shopInfoItem.info3DescZH = ''
        shopInfoItem.info3Pic = ''
        shopInfoItem.info4Flag = false
        shopInfoItem.info4HdrEN = ''
        shopInfoItem.info4HdrCN = ''
        shopInfoItem.info4HdrZH = ''
        shopInfoItem.info4DescEN = ''
        shopInfoItem.info4DescCN = ''
        shopInfoItem.info4DescZH = ''
        shopInfoItem.info4Pic = ''
        shopInfoItem.info5Flag = false
        shopInfoItem.info5HdrEN = ''
        shopInfoItem.info5HdrCN = ''
        shopInfoItem.info5HdrZH = ''
        shopInfoItem.info5DescEN = ''
        shopInfoItem.info5DescCN = ''
        shopInfoItem.info5DescZH = ''
        shopInfoItem.info5Pic = ''
        shopInfoItem.info6Flag = false
        shopInfoItem.info6HdrEN = ''
        shopInfoItem.info6HdrCN = ''
        shopInfoItem.info6HdrZH = ''
        shopInfoItem.info6DescEN = ''
        shopInfoItem.info6DescCN = ''
        shopInfoItem.info6DescZH = ''
        shopInfoItem.info6Pic = ''
        shopInfoItem.info7Flag = false
        shopInfoItem.info7HdrEN = ''
        shopInfoItem.info7HdrCN = ''
        shopInfoItem.info7HdrZH = ''
        shopInfoItem.info7DescEN = ''
        shopInfoItem.info7DescCN = ''
        shopInfoItem.info7DescZH = ''
        shopInfoItem.info7Pic = ''
        shopInfoItem.infoAppFlag = true
        shopInfoItem.appItemIdList.push("S001");
        shopInfoItem.appItemList = null

        this.list.push(shopInfoItem);
        shopInfoItem = new InfoItem();

        shopInfoItem.id = 'IS002'
        shopInfoItem.infoHeaderEN = 'Street Market'
        shopInfoItem.infoHeaderCN = '露天市集'
        shopInfoItem.infoHeaderZH = '露天市集'
        shopInfoItem.infoLogo = 'assets/img/info/shopping/market.png'
        shopInfoItem.info1Flag = true
        shopInfoItem.info1HdrEN = `Ladies' Market`
        shopInfoItem.info1HdrCN = '女人街 '
        shopInfoItem.info1HdrZH = '女人街 '
        shopInfoItem.info1DescEN = `Ladies' Market – Located in Tung Choi Street, Mong Kok. A one- kilometre stretch with 100 stalls of clothing, accessories and souvenirs. `
        shopInfoItem.info1DescCN = '女人街 - 位於旺角通菜街。 长一公里丶逾百个地摊的露天市集。您可以找到服装丶首饰丶玩具和纪念品。'
        shopInfoItem.info1DescZH = '女人街 - 位於旺角通菜街。 長一公里、逾百個地攤的露天市集。您可以找到服裝、首飾、玩具和紀念品。'
        shopInfoItem.info1Pic = 'https://vgy.me/Kz8RSj.jpg'
        shopInfoItem.info2Flag = true
        shopInfoItem.info2HdrEN = 'Apliu Street Flea Market (Electronics)'
        shopInfoItem.info2HdrCN = '鸭寮街（电子用品街）'
        shopInfoItem.info2HdrZH = '鴨寮街（電子用品街）'
        shopInfoItem.info2DescEN = 'Apliu Street – Located in Sham Shui Po, Kowloon. Sale electronic devices, audio-visual equipment, telecommunications products and even old coins and relics.'
        shopInfoItem.info2DescCN = '鸭寮街 - 位於九龙深水埗。林林总总的电子零件丶电讯器材丶电脑硬件丶还有古董杂货如旧唱片丶旧钱币都可以在这里买到。'
        shopInfoItem.info2DescZH = '鴨寮街 - 位於九龍深水埗。林林總總的電子零件、電訊器材、電腦硬件、還有古董雜貨如舊唱片、舊錢幣都可以在這裡買到。'
        shopInfoItem.info2Pic = 'https://vgy.me/1AlN1Q.jpg'
        shopInfoItem.info3Flag = false
        shopInfoItem.info3HdrEN = ''
        shopInfoItem.info3HdrCN = ''
        shopInfoItem.info3HdrZH = ''
        shopInfoItem.info3DescEN = ''
        shopInfoItem.info3DescCN = ''
        shopInfoItem.info3DescZH = ''
        shopInfoItem.info3Pic = ''
        shopInfoItem.info4Flag = false
        shopInfoItem.info4HdrEN = ''
        shopInfoItem.info4HdrCN = ''
        shopInfoItem.info4HdrZH = ''
        shopInfoItem.info4DescEN = ''
        shopInfoItem.info4DescCN = ''
        shopInfoItem.info4DescZH = ''
        shopInfoItem.info4Pic = ''
        shopInfoItem.info5Flag = false
        shopInfoItem.info5HdrEN = ''
        shopInfoItem.info5HdrCN = ''
        shopInfoItem.info5HdrZH = ''
        shopInfoItem.info5DescEN = ''
        shopInfoItem.info5DescCN = ''
        shopInfoItem.info5DescZH = ''
        shopInfoItem.info5Pic = ''
        shopInfoItem.info6Flag = false
        shopInfoItem.info6HdrEN = ''
        shopInfoItem.info6HdrCN = ''
        shopInfoItem.info6HdrZH = ''
        shopInfoItem.info6DescEN = ''
        shopInfoItem.info6DescCN = ''
        shopInfoItem.info6DescZH = ''
        shopInfoItem.info6Pic = ''
        shopInfoItem.info7Flag = false
        shopInfoItem.info7HdrEN = ''
        shopInfoItem.info7HdrCN = ''
        shopInfoItem.info7HdrZH = ''
        shopInfoItem.info7DescEN = ''
        shopInfoItem.info7DescCN = ''
        shopInfoItem.info7DescZH = ''
        shopInfoItem.info7Pic = ''
        shopInfoItem.infoAppFlag = false
        shopInfoItem.appItemIdList = null
        shopInfoItem.appItemList = null

        this.list.push(shopInfoItem);
        shopInfoItem = new InfoItem();
    }

}