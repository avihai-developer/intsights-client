import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-meter-with-label',
    templateUrl: './meter-with-label.component.html',
    styleUrls: ['./meter-with-label.component.scss']
})
export class MeterWithLabelComponent implements OnInit {

    @Input() label: string;
    @Input() percentages: number;

    constructor() {
    }

    ngOnInit() {
    }

}
