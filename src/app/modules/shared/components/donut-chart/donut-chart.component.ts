import {Component, Input, OnInit} from '@angular/core';
import {DonutChartItem} from './interfaces/donut-chart-item';
import DonutContentDictionary from '../donut-content/interfaces/donut-content-dictionary.interface';

@Component({
    selector: 'app-donut-chart',
    templateUrl: './donut-chart.component.html',
    styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

    radius: number;
    @Input() data: DonutContentDictionary;
    donutChart: DonutChartItem[];

    constructor() {
    }

    ngOnInit() {
        this.radius = 70;
        this.setDonutChartData();
    }

    setDonutChartData(): void {
        this.donutChart = [];
        let total = 0;
        for (const key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                total = total + this.data[key].value;
            }
        }
        const circleScope = 2 * Math.PI * this.radius;
        let strokeDashoffset = 0;
        for (const key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                const percentages = this.data[key].value * 100 / total;
                this.donutChart.push({
                    color: this.data[key].color,
                    percentages: percentages ,
                    strokeDasharray: circleScope * (0.01 * percentages) + ' ' + circleScope,
                    strokeDashoffset: strokeDashoffset
                });
                strokeDashoffset = strokeDashoffset - (circleScope * (0.01 * percentages));
            }
        }
    }

}
