import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'blog-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    // tslint:disable-next-line:member-ordering
    tile = { cols: 3, rows: 1, color: 'black' };
}
