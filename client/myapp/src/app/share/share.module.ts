import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from '../material-module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
// share components
import { MenuComponent } from './menu/menu.component';
import { PortraitComponent } from './portrait/portrait.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent, LoginDialogComponent } from './login/login.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule,
        MyOwnCustomMaterialModule,
        HttpModule
    ],
    declarations: [
        MenuComponent,
        PortraitComponent,
        ContactComponent,
        LoginComponent,
        LoginDialogComponent,
    ],
    exports: [
        MenuComponent,
        PortraitComponent,
        ContactComponent,
        LoginComponent,
    ]
})
export class ShareModule { }
