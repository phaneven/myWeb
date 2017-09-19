import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    // encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
    private menuToggle = false;
    
    constructor(private router: ActivatedRoute ) { }

    ngOnInit() {
    
    }

    toggleMenu() {
        this.menuToggle = !this.menuToggle;
    }

    clickHome() {
        console.log(this.router.params);
        this.menuToggle = false;
    }
}
