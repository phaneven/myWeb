import 'rxjs/add/operator/filter';
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatSlideToggle } from '@angular/material';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'blog-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
    @Input() color = 'accent';
    @Input() checked: boolean;
    constructor(private router: Router) {
        router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {
                if (event.url === '/blog/admin') {
                    this.checked = true;
                } else {
                    this.checked = false;
                }
            });
            if (this.router.url === '/blog/admin') {
                this.checked = true;
            } else {
                this.checked = false;
            }
    }

    ngOnInit() {
    }

    onChange(e: Event) {
        this.checked = !this.checked;
        console.log(this.checked);
        if (!this.checked) {
            this.router.navigateByUrl('/blog');
        } else {
            this.router.navigateByUrl('/blog/admin');
        }
    }
}
