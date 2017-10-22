import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FileUploadService {
    constructor (private http: Http) {}
}
