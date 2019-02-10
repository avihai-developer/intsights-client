import {WebStatisticsCardType} from '../enums/web-statistics-card-type';
import DonutContentDictionary from '../../donut-content/interfaces/donut-content-dictionary.interface';
import IconsContentDictionary from '../../icons-content/interfaces/icons-content-dictionary.interface';
import MetersContentDictionary from '../../meters-content/interfaces/meters-content-dictionary.interface';

export default interface WebStatisticsCard {
    title: string;
    type: WebStatisticsCardType;
    items: DonutContentDictionary | IconsContentDictionary | MetersContentDictionary;
    total?: number;
    order: number;
}
