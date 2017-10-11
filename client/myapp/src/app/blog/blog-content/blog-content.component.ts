import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'blog-content',
    templateUrl: './blog-content.component.html',
    styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
    public articles = [];

    constructor(private http: Http) {
        this.http
            .get('http://localhost:8888/blog/postArticle')
            .map(data => data.json())
            .subscribe(
                data => {this.articles = data.articles; console.log(this.articles); }
            );
    }
    ngOnInit() { }

}
