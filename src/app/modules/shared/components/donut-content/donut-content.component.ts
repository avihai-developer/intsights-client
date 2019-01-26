import {Component, Input, OnInit} from '@angular/core';
import {DonutContent} from './interfaces/donut-content';

@Component({
    selector: 'app-donut-content',
    templateUrl: './donut-content.component.html',
    styleUrls: ['./donut-content.component.scss']
})
export class DonutContentComponent implements OnInit {

    @Input() items: DonutContent[];

    constructor() {
    }

    ngOnInit() {
    }

}
