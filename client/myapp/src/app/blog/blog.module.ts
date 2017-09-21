import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdSidenavModule, MdGridListModule} from '@angular/material';

import { BlogComponent } from './blog.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component'

import { ShareModule } from '../share/share.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ShareModule,
        MdCardModule,
        MdButtonModule,
        MdSidenavModule,
        MdGridListModule
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
