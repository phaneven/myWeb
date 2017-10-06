import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdSidenavModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
/* App Root*/
import { HomeComponent } from './home.component';
import { ShareModule } from '../share/share.module';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent,
        ContentComponent,
        // HomeDirective
    ],
    imports: [
        BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
        ShareModule,
        MdButtonModule, MdCardModule, MdSidenavModule, MdMenuModule, MdToolbarModule, MdIconModule
    ],
    exports: [
    ]
})
export class HomeModule { }
