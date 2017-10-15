import { Component, OnInit, Inject, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import { Http } from '@angular/http';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'blog-board',
    templateUrl: './blog-board.component.html',
    styleUrls: ['./blog-board.component.css']
})
export class BlogBoardComponent implements OnInit {
    constructor(public dialog: MatDialog) { }
    title: string;
    ngOnInit() {
    }

    openDialog() {
        const dialogRef = this.dialog.open(BlogEditorComponent, {
            width: '80%',
            height: '520px',
            data: {title: this.title}
        });
    }

}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'blog-editor',
    templateUrl: 'blog-editor.component.html',
    styleUrls: ['./blog-editor.component.css']
})

export class BlogEditorComponent implements OnInit {
    @ViewChild('editor') editor: QuillEditorComponent;
    public messageInfo;
    constructor(
        public dialogRef: MatDialogRef<BlogEditorComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private http: Http) {}

    ngOnInit(): void {
        this.editor.onContentChanged.subscribe(data => this.editor.content = data);
    }

    onClick () {
        const body = {
            title: this.data.title,
            overview: this.editor.content.html.match(/<p>([^<br>].*?)<\/p>/),
            content: this.editor.content.html,
            date: new Date(),
        };
        console.log(this.data.title);
        this.http.post('http://localhost:8888/blog/addArticle', body)
            // .map(res => res.json())
            .subscribe(
                // data => console.log(data),
                // error => console.log(error)
            );
        this.dialogRef.close();
    }
}

