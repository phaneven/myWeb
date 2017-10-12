import { Component, Input, Output, AfterContentInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ViewChild } from '@angular/core';
import { EmitterService } from '../emitter.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterContentInit {
    public menuToggle: boolean;
    public mode: string;
    @ViewChild('sidenav') sidenav: MatSidenav;
    @Input() toggle: boolean;
    @Output() id = '_menu';
    constructor() {
        // EmitterService.get('menu').subscribe(value => console.log('event:' + value));
        const width = window.innerWidth;
        if (width < 500) {
            this.mode = 'over';
        } else {
            this.mode = 'side';
        }
    }

    onClose() {
        console.log('aaaaa');
        this.menuToggle = false;
        EmitterService.get(this.id).emit(this.menuToggle);
    }

    clickLabel() {
        this.sidenav.close();
        this.menuToggle = false;
    }

    ngAfterContentInit() {
        EmitterService.get('menu')
            .subscribe(value => {
                this.menuToggle = value; console.log('value ' + value);
                console.log('menutoggle ' + this.menuToggle);
                if (this.menuToggle) {
                    this.sidenav.open();
                } else {
                    this.sidenav.close();
                }
            });
    }

    setMode(event) {
        // tslint:disable-next-line:prefer-const
        let width = event.target.innerWidth;
        if (width < 500) {
            this.mode = 'over';
        } else {
            this.mode = 'side';
        }
    }
}
