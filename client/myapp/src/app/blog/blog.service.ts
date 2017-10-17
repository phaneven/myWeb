import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class BlogService {
    constructor (private http: Http) {}
    getArticle(id: string) {
        return new Promise((resolve, reject) => {
            this.http
                .post('http://localhost:8888/blog/findArticle', {anchor: id})
                .map(data => data.json()).subscribe(data => {
                    const article = data.article;
                    resolve(article.content);
                });
        });
        // return Promise.resolve('1');
    }
}
