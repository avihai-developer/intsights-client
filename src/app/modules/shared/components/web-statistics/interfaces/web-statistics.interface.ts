import WebStatisticsCardDictionary from './web-statistics-card-dictionary.interface';

export interface WebStatistics {
    mainCard: {
        title: string;
        imageUrl: string;
    };
    cards: WebStatisticsCardDictionary;
    order: number;
}
