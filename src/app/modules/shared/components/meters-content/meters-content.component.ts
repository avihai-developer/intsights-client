import {Component, Input, OnInit} from '@angular/core';
import MetersContentDictionary from './interfaces/meters-content-dictionary.interface';

@Component({
    selector: 'app-meters-content',
    templateUrl: './meters-content.component.html',
    styleUrls: ['./meters-content.component.scss']
})
export class MetersContentComponent implements OnInit {

    @Input() items: MetersContentDictionary;

    constructor() {
    }

    ngOnInit() {
    }

}
