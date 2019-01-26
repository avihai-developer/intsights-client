import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardPageRoutingModule} from './dashboard-page-routing.module';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        DashboardPageComponent
    ],
    imports: [
        CommonModule,
        DashboardPageRoutingModule,
        SharedModule,
        HttpClientModule
    ]
})
export class DashboardPageModule {
}
