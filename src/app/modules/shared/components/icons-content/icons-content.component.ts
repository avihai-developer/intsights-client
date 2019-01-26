import {Component, Input, OnInit} from '@angular/core';
import {IconsContent} from './interfaces/icons-content';

@Component({
    selector: 'app-icons-content',
    templateUrl: './icons-content.component.html',
    styleUrls: ['./icons-content.component.scss']
})
export class IconsContentComponent implements OnInit {

    @Input() items: IconsContent[];

    constructor() {
    }

    ngOnInit() {
    }

}
