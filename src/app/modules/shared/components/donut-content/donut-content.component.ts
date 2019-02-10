import {Component, Input, OnInit} from '@angular/core';
import DonutContentDictionary from './interfaces/donut-content-dictionary.interface';

@Component({
    selector: 'app-donut-content',
    templateUrl: './donut-content.component.html',
    styleUrls: ['./donut-content.component.scss']
})
export class DonutContentComponent implements OnInit {

    @Input() items: DonutContentDictionary;

    constructor() {
    }

    ngOnInit() {
    }

}
