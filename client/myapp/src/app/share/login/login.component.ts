import { Component, OnInit, Inject } from '@angular/core';
// import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Http } from '@angular/http';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    isLogin: boolean;
    constructor(public dialog: MdDialog) { }

    ngOnInit() {
    }

    openDialog() {
        const dialogRef = this.dialog.open(LoginDialogComponent, {
            width: '250px',
            height: '380px',
            data: { username: this.username, password: this.password}
        });
        // dialogRef.afterClosed().subscribe(result => {
            // console.log(`The dialog result: ${result}`);
            // this.password = result;
        // });
    }
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'login-dialog',
    templateUrl: 'login-dialog.component.html',
})

export class LoginDialogComponent {
    public isLogin = false;
    public messageInfo;
    constructor(
        public dialogRef: MdDialogRef<LoginDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any, private http: Http) {}

    clickLater(): void {
        this.dialogRef.close();
    }

    logIn(): void {
        // do something
        const body = {
            username: this.data.username,
            password: this.data.password
        };
        this.http
            .post('http://localhost:8888/blog/login', body)
            .map(res => res.json())
            .subscribe(
                data => {
                    this.messageInfo = data;
                    if (this.messageInfo.Message === 'login') {
                        this.isLogin = true;
                    }
                    console.log(this.isLogin);
                },
                error => console.log(error)
            );
        // console.log(this.messageInfo);
        this.dialogRef.close();
    }

    signUp(): void {
        const body = {
            username: this.data.username,
            password: this.data.password
        };
        console.log(body.username);
        this.http
            .post('http://localhost:8888/blog/registration', body)
            .map(res => res.json())
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        this.dialogRef.close();
    }
}
