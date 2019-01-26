import {Component, Input, OnInit} from '@angular/core';
import {MetersContent} from './interfaces/meters-content';

@Component({
    selector: 'app-meters-content',
    templateUrl: './meters-content.component.html',
    styleUrls: ['./meters-content.component.scss']
})
export class MetersContentComponent implements OnInit {

    @Input() items: MetersContent[];

    constructor() {
    }

    ngOnInit() {
    }

}
