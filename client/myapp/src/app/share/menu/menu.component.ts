import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ViewEncapsulation, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    // encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
    private menuToggle = false;
    @ViewChild('sidenav') sidenav: MdSidenav;

    constructor(private router: ActivatedRoute ) { }

    ngOnInit() {
        
    }

    toggleMenu() {
        this.menuToggle = !this.menuToggle;
        console.log(this.menuToggle);
        if (this.menuToggle)
            this.sidenav.open();
        else
            this.sidenav.close();
    }

    onClose() {
        this.menuToggle = false;
    }

    clickLabel() {
        this.sidenav.close();
        this.menuToggle = false;
    }
}
