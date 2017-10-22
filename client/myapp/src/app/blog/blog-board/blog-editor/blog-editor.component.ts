import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Http } from '@angular/http';

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
        @Inject(MAT_DIALOG_DATA) public data: any, private http: Http) { }

    ngOnInit(): void {
        this.editor.onContentChanged.subscribe(data => this.editor.content = data);
    }

    onClick() {
        const temp = this.editor.content.html.replace(/<p><br><\/p>/g, '');
        const body = {
            title: this.data.title,
            overview: temp.match(/<p>(?!.*<img).*<\/p>/),
            content: this.editor.content.html,
            date: new Date(),
        };
        console.log(this.data.title);
        this.http.post('http://localhost:8888/blog/addArticle', body)
            // .map(res => res.json())
            .subscribe(
                data => {},
                error => console.log(error)
            );
        this.dialogRef.close();
    }

    fileChange(event: Event) {
        // let fileList: FileList = event.target.files;

    }
}
