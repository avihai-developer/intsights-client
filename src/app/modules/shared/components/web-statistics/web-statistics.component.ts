import {Component, Input, OnInit} from '@angular/core';
import {WebStatistics} from './interfaces/web-statistics';
import {WebStatisticsCardType} from './enums/web-statistics-card-type';

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
