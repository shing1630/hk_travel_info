import { AppItem } from "../appItem/AppItem";

export class InfoItem {

    constructor() {
    }

    id: string;

    infoHeaderEN: string;
    infoHeaderCN: string;
    infoHeaderZH: string;

    infoLogo: string;

    info1Flag: boolean;
    info1DescEN: string;
    info1DescCN: string;
    info1DescZH: string;
    info1Pic: string;

    info2Flag: boolean;
    info2DescEN: string;
    info2DescCN: string;
    info2DescZH: string;
    info2Pic: string;

    info3Flag: boolean;
    info3DescEN: string;
    info3DescCN: string;
    info3DescZH: string;
    info3Pic: string;

    info4Flag: boolean;
    info4DescEN: string;
    info4DescCN: string;
    info4DescZH: string;
    info4Pic: string;

    info5Flag: boolean;
    info5DescEN: string;
    info5DescCN: string;
    info5DescZH: string;
    info5Pic: string;

    info6Flag: boolean;
    info6DescEN: string;
    info6DescCN: string;
    info6DescZH: string;
    info6Pic: string;

    info7Flag: boolean;
    info7DescEN: string;
    info7DescCN: string;
    info7DescZH: string;
    info7Pic: string;

    infoAppFlag: boolean;
    appItemIdList: Array<String> = new Array();
    appItemList: Array<AppItem> = new Array();
    
}