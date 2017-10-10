import { Component, OnInit, Inject, Input, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'blog-board',
    templateUrl: './blog-board.component.html',
    styleUrls: ['./blog-board.component.css']
})
export class BlogBoardComponent implements OnInit {
    constructor(public dialog: MdDialog) { }

    ngOnInit() {
    }

    openDialog() {
        const dialogRef = this.dialog.open(BlogEditorComponent, {
            width: '80%',
            height: '550px',
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
        public dialogRef: MdDialogRef<BlogEditorComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) {}

    ngOnInit(): void {
        this.editor.onContentChanged.subscribe(data => this.editor.content = data);
    }

    onClick () {
        console.log(this.editor.content);
    }
}


