import {Injectable} from '@angular/core';
import Risk from '../../interfaces/risk.interface';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RiskService {

    private risks = new BehaviorSubject<Risk[]>(undefined);
    private apiUrl: string = environment.apiUrl + 'risk/';

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getRisks(): BehaviorSubject<Risk[]> {
        if (!this.risks.getValue()) {
            this.httpClient.get(
                this.apiUrl + 'getList',
                {params: {amount: '300'}}
            )
                .subscribe(
                    (response: any) => {
                        this.risks.next(response);
                    },
                    () => {
                        this.risks.next(undefined);
                    }
                );
        }
        return this.risks;
    }

}
