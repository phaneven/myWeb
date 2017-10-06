import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'board-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
    public items = ['myBlog', 'myApp1', 'myApp2', 'myApp3'];
    constructor() { }

    ngOnInit() {
    }

}
