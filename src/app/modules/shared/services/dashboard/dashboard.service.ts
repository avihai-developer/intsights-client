import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import Dashboard from './interfaces/dashboard.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    private dashboardData = new BehaviorSubject<Dashboard>(undefined);
    private apiUrl: string = environment.apiUrl + 'dashboard/';

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getDashboardData(): BehaviorSubject<Dashboard> {
        if (!this.dashboardData.getValue()) {
            this.httpClient.get(
                this.apiUrl + 'getData'
            )
                .subscribe(
                    (response: any) => {
                        this.dashboardData.next(response);
                    },
                    () => {
                        this.dashboardData.next(undefined);
                    }
                );
        }
        return this.dashboardData;
    }

}
