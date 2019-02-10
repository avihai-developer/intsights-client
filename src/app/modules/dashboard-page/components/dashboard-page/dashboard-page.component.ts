import {Component, OnDestroy, OnInit} from '@angular/core';
import {RiskMeter} from './interfaces/risk-meter';
import {BehaviorSubject} from 'rxjs';
import {DashboardService} from '../../../shared/services/dashboard/dashboard.service';
import Dashboard from '../../../shared/services/dashboard/interfaces/dashboard.interface';
import WebStatisticsDictionary from '../../../shared/components/web-statistics/interfaces/web-statistics-dictionary.interface';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

    pageTitle: string;
    webStatistics: WebStatisticsDictionary;
    riskMeter: RiskMeter;
    getDashboardData$: BehaviorSubject<Dashboard>;

    constructor(
        private dashboardService: DashboardService
    ) {
    }

    ngOnInit() {
        this.pageTitle = 'DASHBOARD';
        this.getDashboardData$ = this.dashboardService.getDashboardData();
        this.getDashboardData$.subscribe(
            (dashboardData) => {
                if (dashboardData) {
                    this.riskMeter = dashboardData.riskMeter;
                    this.webStatistics = dashboardData.webStatistics;
                }
            }
        );
    }

    ngOnDestroy(): void {
        if (this.getDashboardData$) {
            this.getDashboardData$.unsubscribe();
        }
    }

}
