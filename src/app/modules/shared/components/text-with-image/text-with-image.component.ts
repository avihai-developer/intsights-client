import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-text-with-image',
    templateUrl: './text-with-image.component.html',
    styleUrls: ['./text-with-image.component.scss']
})
export class TextWithImageComponent implements OnInit {

    @Input() text: string;
    @Input() imageUrl: string;

    constructor() {
    }

    ngOnInit() {
    }

}
