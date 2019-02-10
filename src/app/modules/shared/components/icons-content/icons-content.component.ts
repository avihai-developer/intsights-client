import {Component, Input, OnInit} from '@angular/core';
import IconsContentDictionary from './interfaces/icons-content-dictionary.interface';

@Component({
    selector: 'app-icons-content',
    templateUrl: './icons-content.component.html',
    styleUrls: ['./icons-content.component.scss']
})
export class IconsContentComponent implements OnInit {

    @Input() items: IconsContentDictionary;

    constructor() {
    }

    ngOnInit() {
    }

}
