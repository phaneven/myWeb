import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {
    title: string;
    subTitle: string;
    
    constructor() { }

    ngOnInit() {
        this.title = "Phaneven"
        this.subTitle = "Ping.F's website"
    }
}
