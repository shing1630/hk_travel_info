import { Injectable } from '@angular/core';
import { InfoItem } from "./InfoItem";

@Injectable()
export class WeatherInfoItemList {

    public list: Array<InfoItem> = new Array();

    constructor() {
        this.init();
    }

    init() {

        let weatherInfoItem = new InfoItem();
        weatherInfoItem.id = 'IW001'
        weatherInfoItem.infoHeaderEN = 'Temperature'
        weatherInfoItem.infoHeaderCN = '温度'
        weatherInfoItem.infoHeaderZH = '溫度'
        weatherInfoItem.infoLogo = 'assets/img/info/weather/temperature.png'
        weatherInfoItem.info1Flag = true
        weatherInfoItem.info1HdrEN = 'Spring (March to May)'
        weatherInfoItem.info1HdrCN = '春天（三月至五月）'
        weatherInfoItem.info1HdrZH = '春天（三月至五月）'
        weatherInfoItem.info1DescEN = 'Average Temperature: 17°C – 26 °C. Normally warm days. Evenings can be cool.'
        weatherInfoItem.info1DescCN = '平均温度：17°C - 26°C。 温暖日子。 晚上比较凉。'
        weatherInfoItem.info1DescZH = '平均溫度：17°C - 26°C。 溫暖日子。 晚上比較涼。'
        weatherInfoItem.info1Pic = 'https://vgy.me/hi0Kd6.jpg'
        weatherInfoItem.info2Flag = true
        weatherInfoItem.info2HdrEN = 'Summer (June to August)'
        weatherInfoItem.info2HdrCN = '夏天（六月至八月）'
        weatherInfoItem.info2HdrZH = '夏天（六月至八月）'
        weatherInfoItem.info2DescEN = 'Average Temperature: 26°C – 31°C. Hot and sunny.  Feel even hotter during high humidity levels.'
        weatherInfoItem.info2DescCN = '平均温度：26°C - 31°C。炎热，阳光充沛。在潮湿日子会比较热。'
        weatherInfoItem.info2DescZH = '平均溫度：26°C - 31°C。炎熱，陽光充沛。在潮濕日子會比較熱。'
        weatherInfoItem.info2Pic = 'https://vgy.me/zYWZmQ.jpg'
        weatherInfoItem.info3Flag = true
        weatherInfoItem.info3HdrEN = 'Autumn (September to November)'
        weatherInfoItem.info3HdrCN = '秋天（九月至十一月）'
        weatherInfoItem.info3HdrZH = '秋天（九月至十一月）'
        weatherInfoItem.info3DescEN = 'Average Temperature: 19°C – 28°C. Comfortable temperatures with sunshine. Best months of the year to visit Hong Kong.'
        weatherInfoItem.info3DescCN = '平均温度：19°C - 28°C。 舒适的温度与阳光。 是全年最适合到访的时候。'
        weatherInfoItem.info3DescZH = '平均溫度：19°C - 28°C。 舒適的溫度與陽光。 是全年最適合到訪的時候。'
        weatherInfoItem.info3Pic = 'https://vgy.me/WDlYX9.jpg'
        weatherInfoItem.info4Flag = true
        weatherInfoItem.info4HdrEN = 'Winter (December to February)'
        weatherInfoItem.info4HdrCN = '冬天（十二月至二月）'
        weatherInfoItem.info4HdrZH = '冬天（十二月至二月）'
        weatherInfoItem.info4DescEN = 'Average Temperature: 12°C – 20°C. Cold and dry. The temperature can be below 12°C in some areas.'
        weatherInfoItem.info4DescCN = '平均温度：12°C - 20°C。有冷锋和乾爽。 某些地区的温度可能低於12°C。'
        weatherInfoItem.info4DescZH = '平均溫度：12°C - 20°C。有冷鋒和乾爽。 某些地區的溫度可能低於12°C。'
        weatherInfoItem.info4Pic = 'https://vgy.me/pM9mAT.jpg'
        weatherInfoItem.info5Flag = false
        weatherInfoItem.info5HdrEN = ''
        weatherInfoItem.info5HdrCN = ''
        weatherInfoItem.info5HdrZH = ''
        weatherInfoItem.info5DescEN = ''
        weatherInfoItem.info5DescCN = ''
        weatherInfoItem.info5DescZH = ''
        weatherInfoItem.info5Pic = ''
        weatherInfoItem.info6Flag = false
        weatherInfoItem.info6HdrEN = ''
        weatherInfoItem.info6HdrCN = ''
        weatherInfoItem.info6HdrZH = ''
        weatherInfoItem.info6DescEN = ''
        weatherInfoItem.info6DescCN = ''
        weatherInfoItem.info6DescZH = ''
        weatherInfoItem.info6Pic = ''
        weatherInfoItem.info7Flag = false
        weatherInfoItem.info7HdrEN = ''
        weatherInfoItem.info7HdrCN = ''
        weatherInfoItem.info7HdrZH = ''
        weatherInfoItem.info7DescEN = ''
        weatherInfoItem.info7DescCN = ''
        weatherInfoItem.info7DescZH = ''
        weatherInfoItem.info7Pic = ''
        weatherInfoItem.infoAppFlag = true
        weatherInfoItem.appItemIdList.push("W001", "W002");
        weatherInfoItem.appItemList = null
        this.list.push(weatherInfoItem);
        weatherInfoItem = new InfoItem();
        weatherInfoItem.id = 'IW002'
        weatherInfoItem.infoHeaderEN = 'Rain'
        weatherInfoItem.infoHeaderCN = '雨量'
        weatherInfoItem.infoHeaderZH = '雨量'
        weatherInfoItem.infoLogo = 'assets/img/info/weather/rain.png'
        weatherInfoItem.info1Flag = true
        weatherInfoItem.info1HdrEN = 'Spring (March to May)'
        weatherInfoItem.info1HdrCN = '春天（三月至五月）'
        weatherInfoItem.info1HdrZH = '春天（三月至五月）'
        weatherInfoItem.info1DescEN = 'Fog and drizzle. Sometimes low visibility.'
        weatherInfoItem.info1DescCN = '雾和毛毛雨，有时候能见度低。'
        weatherInfoItem.info1DescZH = '霧和毛毛雨，有時候能見度低。'
        weatherInfoItem.info1Pic = 'https://vgy.me/zZDCXZ.jpg'
        weatherInfoItem.info2Flag = true
        weatherInfoItem.info2HdrEN = 'Summer (June to August)'
        weatherInfoItem.info2HdrCN = '夏天（六月至八月）'
        weatherInfoItem.info2HdrZH = '夏天（六月至八月）'
        weatherInfoItem.info2DescEN = 'Occasional showers and thunderstorms. Likely to be affected by tropical cyclones.'
        weatherInfoItem.info2DescCN = '间中有骤雨和雷暴。可能受台风影响。'
        weatherInfoItem.info2DescZH = '間中有驟雨和雷暴。可能受颱風影響。'
        weatherInfoItem.info2Pic = 'https://vgy.me/j1wQda.jpg'
        weatherInfoItem.info3Flag = true
        weatherInfoItem.info3HdrEN = 'Autumn (September to November)'
        weatherInfoItem.info3HdrCN = '秋天（九月至十一月）'
        weatherInfoItem.info3HdrZH = '秋天（九月至十一月）'
        weatherInfoItem.info3DescEN = 'Drizzle. Likely to be affected by tropical cyclones. But still the best months of the year to visit Hong Kong.'
        weatherInfoItem.info3DescCN = '毛毛雨。可能受台风影响。但也是最适合到访的时候。'
        weatherInfoItem.info3DescZH = '毛毛雨。可能受颱風影響。但也是最適合到訪的時候。'
        weatherInfoItem.info3Pic = 'https://vgy.me/5bIGB9.jpg'
        weatherInfoItem.info4Flag = true
        weatherInfoItem.info4HdrEN = 'Winter (December to February)'
        weatherInfoItem.info4HdrCN = '冬天（十二月至二月）'
        weatherInfoItem.info4HdrZH = '冬天（十二月至二月）'
        weatherInfoItem.info4DescEN = 'Occasional dizzle.'
        weatherInfoItem.info4DescCN = '间中有毛毛雨。'
        weatherInfoItem.info4DescZH = '間中有毛毛雨。'
        weatherInfoItem.info4Pic = 'https://vgy.me/KriqDS.jpg'
        weatherInfoItem.info5Flag = false
        weatherInfoItem.info5HdrEN = ''
        weatherInfoItem.info5HdrCN = ''
        weatherInfoItem.info5HdrZH = ''
        weatherInfoItem.info5DescEN = ''
        weatherInfoItem.info5DescCN = ''
        weatherInfoItem.info5DescZH = ''
        weatherInfoItem.info5Pic = ''
        weatherInfoItem.info6Flag = false
        weatherInfoItem.info6HdrEN = ''
        weatherInfoItem.info6HdrCN = ''
        weatherInfoItem.info6HdrZH = ''
        weatherInfoItem.info6DescEN = ''
        weatherInfoItem.info6DescCN = ''
        weatherInfoItem.info6DescZH = ''
        weatherInfoItem.info6Pic = ''
        weatherInfoItem.info7Flag = false
        weatherInfoItem.info7HdrEN = ''
        weatherInfoItem.info7HdrCN = ''
        weatherInfoItem.info7HdrZH = ''
        weatherInfoItem.info7DescEN = ''
        weatherInfoItem.info7DescCN = ''
        weatherInfoItem.info7DescZH = ''
        weatherInfoItem.info7Pic = ''
        weatherInfoItem.infoAppFlag = true
        weatherInfoItem.appItemIdList.push("W001", "W002");
        weatherInfoItem.appItemList = null

        this.list.push(weatherInfoItem);
        weatherInfoItem = new InfoItem();
    }

}