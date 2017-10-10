import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'blog-board',
    templateUrl: './blog-board.component.html',
    styleUrls: ['./blog-board.component.css']
})
export class BlogBoardComponent implements OnInit {
    username: string;
    password: string;
    constructor(public dialog: MdDialog) { }

    ngOnInit() {
    }

    openDialog() {
        const dialogRef = this.dialog.open(BlogEditorComponent, {
            width: '80%',
            height: '520px',
            data: { username: this.username, password: this.password}
        });
    }

}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'blog-editor',
    templateUrl: 'blog-editor.component.html',
})

export class BlogEditorComponent {
    public isLogin = false;
    public messageInfo;
    constructor(
        public dialogRef: MdDialogRef<BlogEditorComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) {}

}


