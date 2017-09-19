import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BlogComponent,
        HeaderComponent,
        ContentComponent
    ], 
    exports: [
        HeaderComponent
    ]
    
})
export class BlogModule { }
