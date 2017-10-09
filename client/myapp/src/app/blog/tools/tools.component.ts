import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'blog-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
    color = 'primary';
    constructor() { }

    ngOnInit() {
    }

}
