import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmitterService } from '../../emitter.service';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements AfterContentInit {
    public menuToggle: boolean;
    @Output() id = 'menu';
    @Input() toggle: boolean;
    constructor(private router: ActivatedRoute) { }

    toggleMenu() {
        this.menuToggle = !this.menuToggle;
        EmitterService.get(this.id).emit(this.menuToggle);
    }

    ngAfterContentInit() {
        EmitterService.get('_menu')
            .subscribe(value => {
                this.menuToggle = value; console.log('value ' + value);
            });
    }

}
