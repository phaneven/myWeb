import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
/* App Root*/
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component'
import { Routes, RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent, 
        MenuComponent,
        ContentComponent,
        // HomeDirective
    ],
    imports: [
        BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
        MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule
    ],
    exports: [
        // HomeComponent,
        MenuComponent
    ]
})
export class HomeModule { }
