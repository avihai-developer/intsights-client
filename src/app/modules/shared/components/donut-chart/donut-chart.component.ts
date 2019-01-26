import {Component, Input, OnInit} from '@angular/core';
import {DonutContent} from '../donut-content/interfaces/donut-content';
import {DonutChartItem} from './interfaces/donut-chart-item';

@Component({
    selector: 'app-donut-chart',
    templateUrl: './donut-chart.component.html',
    styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

    radius: number;
    @Input() data: DonutContent[];
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
        for (let i = 0; i < this.data.length; i++) {
            total = total + this.data[i].value;
        }
        const circleScope = 2 * Math.PI * this.radius;
        let strokeDashoffset = 0;
        for (let i = 0; i < this.data.length; i++) {
            const percentages = this.data[i].value * 100 / total;
            this.donutChart.push({
                color: this.data[i].color,
                percentages: percentages ,
                strokeDasharray: circleScope * (0.01 * percentages) + ' ' + circleScope,
                strokeDashoffset: strokeDashoffset
            });
            strokeDashoffset = strokeDashoffset - (circleScope * (0.01 * percentages));
        }
    }

}
