import {RiskMeter} from '../../../../dashboard-page/components/dashboard-page/interfaces/risk-meter';
import WebStatisticsDictionary from '../../../components/web-statistics/interfaces/web-statistics-dictionary.interface';

export default interface Dashboard {
    riskMeter: RiskMeter;
    webStatistics: WebStatisticsDictionary;
}
