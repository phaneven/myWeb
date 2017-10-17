import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class BlogService {
    constructor (private http: Http) {}
    getArticle(id: string) {
        return this.http
                .post('http://localhost:8888/blog/findArticle', {anchor: id})
                .map(data => data.json());
        // return Promise.resolve('1');
    }
}
