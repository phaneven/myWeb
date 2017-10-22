import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import { PageEvent } from '@angular/material/paginator';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'blog-content',
    templateUrl: './blog-content.component.html',
    styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
    public articles = [];
    public choosedArticles = [];
    public length;
    public pageSize = 5;
    public pageSizeOptions = [5, 10];
    public currentPageIndex = 0;
    constructor(private http: Http) {
        this.http
            .get('http://localhost:8888/blog/postArticle')
            .map(data => data.json())
            .subscribe(
                data => {
                    this.articles = data.articles;
                    console.log(this.articles);
                    this.length = this.articles.length;
                    this.choosedArticles = this.articles
                        .slice(this.pageSize * this.currentPageIndex, this.pageSize * (this.currentPageIndex + 1));
                }
            );
    }
    ngOnInit() { }

    onChange(e: PageEvent) {
        this.pageSize = e.pageSize;
        this.currentPageIndex = e.pageIndex;
        // this.choosedArticles = this.articles.slice()
        console.log('PAGESIZE: ' + this.pageSize);
        this.choosedArticles = this.articles
            .slice(this.pageSize * this.currentPageIndex, this.pageSize * (this.currentPageIndex + 1));
    }

    setBackground () {
        const style = {'background': 'url(../../../assets/images/blog-header-background.jpg)'};
        return style;
    }
}

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
