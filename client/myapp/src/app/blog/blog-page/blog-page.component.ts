import 'rxjs/add/operator/switchMap';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { BlogService } from '../blog.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.css'],
    providers: [BlogService]
})
export class BlogPageComponent implements AfterContentInit {
    public title: string;
    public article;
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private http: Http,
        private blogService: BlogService
    ) { }

    ngAfterContentInit() {
        // this.route.paramMap
        //     .switchMap((params: ParamMap) => this.blogService.getArticle(params.get('id')))
        //     .subscribe(data => {
        //         console.log(data);
        //         this.article = data;
        //     });
        this.route.paramMap
        .switchMap((params: ParamMap) => this.blogService.getArticle(params.get('id')))
        .subscribe(data => {
            this.article = data;
        });
    }
}
