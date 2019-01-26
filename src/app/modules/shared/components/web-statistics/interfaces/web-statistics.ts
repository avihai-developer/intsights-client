import {WebStatisticsCard} from './web-statistics-card';

export interface WebStatistics {
    id?: string;
    mainCard: {
        title: string;
        imageUrl: string;
    };
    cards: WebStatisticsCard[];
}
