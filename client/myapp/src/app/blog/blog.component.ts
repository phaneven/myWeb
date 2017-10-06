import { Component, OnInit, ViewChild, Input, Output, AfterContentInit } from '@angular/core';
import { EmitterService } from '../emitter.service';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements AfterContentInit {
    public menuToggle: boolean;
    @ViewChild('sidenav') sidenav: MdSidenav;
    @Input() toggle: boolean;
    @Output() id = '_menu';
    constructor() {}

    onClose() {
        this.menuToggle = false;
        EmitterService.get(this.id).emit(this.menuToggle);
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

}
