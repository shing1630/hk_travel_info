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
        accomInfoItem.id=	'IA001'
        accomInfoItem.infoHeaderEN=	'Taxi'
        accomInfoItem.infoHeaderCN=	'出租车'
        accomInfoItem.infoHeaderZH=	'的士'
        accomInfoItem.infoLogo=	'assets/img/info/train.png'
        accomInfoItem.info1Flag=	true
        accomInfoItem.info1DescEN=	'Taxis of Hong Kong provide a taxi system. Although a few taxis are independently owned and operated, the vast majority are owned by 17 independent taxi companies that rent out taxis on a shift basis to 40,000 self-employed drivers.'
        accomInfoItem.info1DescCN=	'香港的士，即香港的出租车，“的士”一字是从出租车的英语“Taxi”音译出来的。乘客上车后指明目的地，司机直接驾驶前往，是方便快捷的公共交通工具。车费根据车程及等候时间而定，而存放行李、电话召唤出租车及使用收费道路等则需缴付附加费用。香港各区设有不少出租车站供乘客等候出租车，而部分停车禁区亦设有一些出租车专用的上落客位置。'
        accomInfoItem.info1DescZH=	'香港的士，即香港的的士，「的士」一字是從計程車的英語「Taxi」音譯出來的。乘客上車後指明目的地，司機直接駕駛前往，是方便快捷的公共交通工具。車費根據車程及等候時間而定，而存放行李、電話召喚的士及使用收費道路等則需繳付附加費用。香港各區設有不少的士站供乘客等候的士，而部分停車禁區亦設有一些的士專用的上落客位置。'
        accomInfoItem.info1Pic=	'https://vgy.me/GMohI1.jpeg'
        accomInfoItem.info2Flag=	true
        accomInfoItem.info2DescEN=	'Taxis of Hong Kong provide a taxi system. Although a few taxis are independently owned and operated, the vast majority are owned by 17 independent taxi companies that rent out taxis on a shift basis to 40,000 self-employed drivers.'
        accomInfoItem.info2DescCN=	'香港的士，即香港的出租车，“的士”一字是从出租车的英语“Taxi”音译出来的。乘客上车后指明目的地，司机直接驾驶前往，是方便快捷的公共交通工具。车费根据车程及等候时间而定，而存放行李、电话召唤出租车及使用收费道路等则需缴付附加费用。香港各区设有不少出租车站供乘客等候出租车，而部分停车禁区亦设有一些出租车专用的上落客位置。'
        accomInfoItem.info2DescZH=	'香港的士，即香港的的士，「的士」一字是從計程車的英語「Taxi」音譯出來的。乘客上車後指明目的地，司機直接駕駛前往，是方便快捷的公共交通工具。車費根據車程及等候時間而定，而存放行李、電話召喚的士及使用收費道路等則需繳付附加費用。香港各區設有不少的士站供乘客等候的士，而部分停車禁區亦設有一些的士專用的上落客位置。'
        accomInfoItem.info2Pic=	'https://vgy.me/FenAPG.jpeg'
        accomInfoItem.info3Flag=	false
        accomInfoItem.info3DescEN=	''
        accomInfoItem.info3DescCN=	'IA001'
        accomInfoItem.info3DescZH=	''
        accomInfoItem.info3Pic=	''
        accomInfoItem.info4Flag=	false
        accomInfoItem.info4DescEN=	''
        accomInfoItem.info4DescCN=	''
        accomInfoItem.info4DescZH=	''
        accomInfoItem.info5Pic=	''
        accomInfoItem.info5Flag=	false
        accomInfoItem.info5DescEN=	''
        accomInfoItem.info5DescCN=	''
        accomInfoItem.info5DescZH=	''
        accomInfoItem.info5Pic=	''
        accomInfoItem.info6Flag=	false
        accomInfoItem.info6DescEN=	''
        accomInfoItem.info6DescCN=	''
        accomInfoItem.info6DescZH=	''
        accomInfoItem.info6Pic=	''
        accomInfoItem.info7Flag=	false
        accomInfoItem.info7DescEN=	''
        accomInfoItem.info7DescCN=	''
        accomInfoItem.info7DescZH=	''
        accomInfoItem.info7Pic=	''
        accomInfoItem.infoAppFlag=	true
        accomInfoItem.appItemIdlist.push('A001', 'A002');
        accomInfoItem.appItemlist=	null;

        this.list.push(accomInfoItem);
        accomInfoItem = new InfoItem();
    }

}