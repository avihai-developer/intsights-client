import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebStatistics} from '../../../shared/components/web-statistics/interfaces/web-statistics';
import {WebStatisticsCardType} from '../../../shared/components/web-statistics/enums/web-statistics-card-type';
import {RiskMeter} from './interfaces/risk-meter';
import {RiskService} from '../../../shared/services/risk/risk.service';
import {BehaviorSubject} from 'rxjs';
import Risk from '../../../shared/interfaces/risk.interface';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

    pageTitle: string;
    webStatistics: WebStatistics[];
    riskMeter: RiskMeter;
    getRisks$: BehaviorSubject<Risk[]>;

    constructor(
        private riskService: RiskService
    ) {
    }

    ngOnInit() {
        this.pageTitle = 'DASHBOARD';
        this.setDefaultData();
        this.getRisks$ = this.riskService.getRisks();
        this.getRisks$
            .subscribe(
                (risks) => {
                    this.setData(risks);
                }
            );
    }

    setDefaultData() {
        this.webStatistics = [
            {
                id: 'ClearWeb',
                mainCard: {
                    title: 'CLEAR WEB',
                    imageUrl: './assets/clear_web.png'
                },
                cards: [
                    {
                        id: 'type',
                        title: 'TYPES',
                        type: WebStatisticsCardType.Icons,
                        items: [
                            {
                                id: 'AttackIndication',
                                text: 'ATTACK INDICATION',
                                value: 0,
                                imageUrl: './assets/attack.svg'
                            },
                            {
                                id: 'DataLeakage',
                                text: 'DATA LEAKAGE',
                                value: 0,
                                imageUrl: './assets/data_leak.svg'
                            },
                            {
                                id: 'Phishing',
                                text: 'PHISHING',
                                value: 0,
                                imageUrl: './assets/phishing.svg'
                            },
                            {
                                id: 'BrandSecurity',
                                text: 'BRAND SECURITY',
                                value: 0,
                                imageUrl: './assets/brand_security.svg'
                            },
                            {
                                id: 'ExploitableData',
                                text: 'EXPLOITABLE DATA™',
                                value: 0,
                                imageUrl: './assets/exploitable_data.svg'
                            },
                            {
                                id: 'vip',
                                text: 'VIP',
                                value: 0,
                                imageUrl: './assets/vip.svg'
                            }
                        ]
                    },
                    {
                        id: 'severity',
                        title: 'SEVERITIES',
                        type: WebStatisticsCardType.DonutChart,
                        items: [
                            {
                                id: 'High',
                                text: 'HIGH',
                                value: 0,
                                color: '#e52e3d'
                            },
                            {
                                id: 'Medium',
                                text: 'MEDIUM',
                                value: 0,
                                color: '#f7a800'
                            },
                            {
                                id: 'Low',
                                text: 'LOW',
                                value: 0,
                                color: '#03afd8'
                            }
                        ]
                    },
                    {
                        id: 'sourceType',
                        title: 'SOURCES (%)',
                        type: WebStatisticsCardType.Meters,
                        items: [
                            {
                                id: 'ApplicationStores',
                                text: 'APPLICATION STORES',
                                value: 0
                            },
                            {
                                id: 'SocialMedia',
                                text: 'SOCIAL MEDIA',
                                value: 0
                            },
                            {
                                id: 'PasteSites',
                                text: 'PASTE SITES',
                                value: 0
                            },
                            {
                                id: 'Others',
                                text: 'OTHERS',
                                value: 0
                            }
                        ]
                    },
                ]
            },
            {
                id: 'DarkWeb',
                mainCard: {
                    title: 'DARK WEB',
                    imageUrl: './assets/dark_web.png'
                },
                cards: [
                    {
                        id: 'type',
                        title: 'TYPES',
                        type: WebStatisticsCardType.Icons,
                        items: [
                            {
                                id: 'AttackIndication',
                                text: 'ATTACK INDICATION',
                                value: 0,
                                imageUrl: './assets/attack.svg'
                            },
                            {
                                id: 'DataLeakage',
                                text: 'DATA LEAKAGE',
                                value: 0,
                                imageUrl: './assets/data_leak.svg'
                            },
                            {
                                id: 'Phishing',
                                text: 'PHISHING',
                                value: 0,
                                imageUrl: './assets/phishing.svg'
                            },
                            {
                                id: 'BrandSecurity',
                                text: 'BRAND SECURITY',
                                value: 0,
                                imageUrl: './assets/brand_security.svg'
                            },
                            {
                                id: 'ExploitableData',
                                text: 'EXPLOITABLE DATA™',
                                value: 0,
                                imageUrl: './assets/exploitable_data.svg'
                            },
                            {
                                id: 'vip',
                                text: 'VIP',
                                value: 0,
                                imageUrl: './assets/vip.svg'
                            }
                        ]
                    },
                    {
                        id: 'severity',
                        title: 'SEVERITIES',
                        type: WebStatisticsCardType.DonutChart,
                        items: [
                            {
                                id: 'High',
                                text: 'HIGH',
                                value: 0,
                                color: '#e52e3d'
                            },
                            {
                                id: 'Medium',
                                text: 'MEDIUM',
                                value: 0,
                                color: '#f7a800'
                            },
                            {
                                id: 'Low',
                                text: 'LOW',
                                value: 0,
                                color: '#03afd8'
                            }
                        ]
                    },
                    {
                        id: 'sourceType',
                        title: 'SOURCES (%)',
                        type: WebStatisticsCardType.Meters,
                        items: [
                            {
                                id: 'BlackMarkets',
                                text: 'BLACK MARKETS',
                                value: 0
                            },
                            {
                                id: 'HackingForums',
                                text: 'HACKING FORUMS',
                                value: 0
                            },
                            {
                                id: 'PasteSites',
                                text: 'PASTE SITES',
                                value: 0
                            },
                            {
                                id: 'Others',
                                text: 'OTHERS',
                                value: 0
                            }
                        ]
                    },
                ]
            }
        ];
        this.riskMeter = {
            title: 'SYSTEM RISK METER',
            percentages: 0
        };
    }

    setData(risks: Risk[]): void {
        this.setDefaultData();
        if (risks) {
            for (let i = 0; i < risks.length; i++) {
                // Set type
                this.webStatistics
                    .find((webStatistic => webStatistic.id === risks[i].networkType)).cards
                    .find(card => card.id === 'type').items
                    .find(item => item.id === risks[i].type)
                    .value++;
                // Set Severity
                this.webStatistics
                    .find((webStatistic => webStatistic.id === risks[i].networkType)).cards
                    .find(card => card.id === 'severity').items
                    .find(item => item.id === risks[i].severity)
                    .value++;
                // Set Sources
                const sourceType = this.webStatistics
                    .find((webStatistic => webStatistic.id === risks[i].networkType)).cards
                    .find(card => card.id === 'sourceType').items
                    .find(item => item.id === risks[i].sourceType);
                if (sourceType) {
                    sourceType.value++;
                }
            }
            // change Sources to %
            let totalSourcesClear = 0;
            const sourcesClear = this.webStatistics
                .find(webStatistic => webStatistic.id === 'ClearWeb').cards
                .find(card => card.id === 'sourceType').items;
            for (let i = 0; i < sourcesClear.length; i++) {
                totalSourcesClear = totalSourcesClear + sourcesClear[i].value;
            }
            for (let i = 0; i < sourcesClear.length; i++) {
                sourcesClear[i].value = Math.round(sourcesClear[i].value * 100 / totalSourcesClear);
            }
            const sourcesDark = this.webStatistics
                .find(webStatistic => webStatistic.id === 'DarkWeb').cards
                .find(card => card.id === 'sourceType').items;
            let totalSourcesDark = 0;
            for (let i = 0; i < sourcesDark.length; i++) {
                totalSourcesDark = totalSourcesDark + sourcesDark[i].value;
            }
            for (let i = 0; i < sourcesDark.length; i++) {
                sourcesDark[i].value = Math.round(sourcesDark[i].value * 100 / totalSourcesDark);
            }
            this.riskMeter.percentages = this.calcRiskMeter(risks);
        }
    }

    calcRiskMeter(risks: Risk[]): number {
        let totalSeverityRisk = 0;
        let totalTypeRisk = 0;
        for (let i = 0; i < risks.length; i++) {
            switch (risks[i].severity) {
                case 'High':
                    totalSeverityRisk = totalSeverityRisk + 100;
                    break;
                case 'Medium':
                    totalSeverityRisk = totalSeverityRisk + 70;
                    break;
                case 'Low':
                    totalSeverityRisk = totalSeverityRisk + 40;
                    break;
            }
            switch (risks[i].type) {
                case 'AttackIndication':
                    totalTypeRisk = totalTypeRisk + 80;
                    break;
                case 'DataLeakage':
                    totalTypeRisk = totalTypeRisk + 20;
                    break;
                case 'Phishing':
                    totalTypeRisk = totalTypeRisk + 10;
                    break;
                case 'BrandSecurity':
                    totalTypeRisk = totalTypeRisk + 40;
                    break;
                case 'ExploitableData':
                    totalTypeRisk = totalTypeRisk + 60;
                    break;
                case 'vip':
                    totalTypeRisk = totalTypeRisk + 100;
                    break;
            }
        }
        return Math.round(((totalSeverityRisk / risks.length) + (totalTypeRisk / risks.length)) / 2);
    }

    ngOnDestroy(): void {
        if (this.getRisks$) {
            this.getRisks$.unsubscribe();
        }
    }

}
