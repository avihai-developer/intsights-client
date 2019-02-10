import {Component, Input, OnInit} from '@angular/core';
import {WebStatisticsCardType} from './enums/web-statistics-card-type';
import {WebStatistics} from './interfaces/web-statistics.interface';

@Component({
    selector: 'app-web-statistics',
    templateUrl: './web-statistics.component.html',
    styleUrls: ['./web-statistics.component.scss']
})
export class WebStatisticsComponent implements OnInit {

    @Input() data: WebStatistics;
    WebStatisticsCardType = WebStatisticsCardType;

    constructor() {
    }

    ngOnInit() {
    }

}
