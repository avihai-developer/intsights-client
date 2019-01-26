import {WebStatisticsCardType} from '../enums/web-statistics-card-type';
import {DonutContent} from '../../donut-content/interfaces/donut-content';
import {IconsContent} from '../../icons-content/interfaces/icons-content';
import {MetersContent} from '../../meters-content/interfaces/meters-content';

export interface WebStatisticsCard {
    id?: string;
    title: string;
    type: WebStatisticsCardType;
    items: DonutContent[] | IconsContent[] | MetersContent[];
}
