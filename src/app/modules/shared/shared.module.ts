import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTitleComponent} from './components/page-title/page-title.component';
import {WebStatisticsComponent} from './components/web-statistics/web-statistics.component';
import { CardComponent } from './components/card/card.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { IconsContentComponent } from './components/icons-content/icons-content.component';
import { DonutContentComponent } from './components/donut-content/donut-content.component';
import { MetersContentComponent } from './components/meters-content/meters-content.component';
import { TextWithImageComponent } from './components/text-with-image/text-with-image.component';
import { MeterComponent } from './components/meter/meter.component';
import { MeterWithLabelComponent } from './components/meter-with-label/meter-with-label.component';
import {HttpClientModule} from '@angular/common/http';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';

@NgModule({
    declarations: [
        PageTitleComponent,
        WebStatisticsComponent,
        CardComponent,
        DonutChartComponent,
        IconsContentComponent,
        DonutContentComponent,
        MetersContentComponent,
        TextWithImageComponent,
        MeterComponent,
        MeterWithLabelComponent,
        OrderByPipe
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        PageTitleComponent,
        WebStatisticsComponent,
        CardComponent,
        DonutChartComponent,
        MeterWithLabelComponent,
        OrderByPipe
    ]
})
export class SharedModule {
}
