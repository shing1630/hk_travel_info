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
    info1Pic: string;
    info1DescEN: string;
    info1DescCN: string;
    info1DescZH: string;

    info2Flag: boolean;
    info2Pic: string;
    info2DescEN: string;
    info2DescCN: string;
    info2DescZH: string;

    info3Flag: boolean;
    info3Pic: string;
    info3DescEN: string;
    info3DescCN: string;
    info3DescZH: string;

    info4Flag: boolean;
    info4Pic: string;
    info4DescEN: string;
    info4DescCN: string;
    info4DescZH: string;

    info5Flag: boolean;
    info5Pic: string;
    info5DescEN: string;
    info5DescCN: string;
    info5DescZH: string;

    info6Flag: boolean;
    info6Pic: string;
    info6DescEN: string;
    info6DescCN: string;
    info6DescZH: string;

    info7Flag: boolean;
    info7Pic: string;
    info7DescEN: string;
    info7DescCN: string;
    info7DescZH: string;

    infoAppFlag: boolean;
    appItemIdlist: Array<String> = new Array();
    appItemlist: Array<AppItem> = new Array();
    
}