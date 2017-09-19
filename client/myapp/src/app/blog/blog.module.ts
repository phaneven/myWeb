import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { BlogComponent } from './blog.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component'

import { HomeModule } from '../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HomeModule,
        MdCardModule,
        MdButtonModule,
    ],
    declarations: [
        BlogComponent,
        HeaderComponent,
        ContentComponent,
    ], 
    exports: [
        HeaderComponent
    ]
    
})
export class BlogModule { }
