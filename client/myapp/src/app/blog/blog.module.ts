import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule} from '../material-module';

import { BlogComponent } from './blog.component';
import { HeaderComponent } from './header/header.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { ToolsComponent } from './tools/tools.component';
import { BlogBoardComponent, BlogEditorComponent } from './blog-board/blog-board.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ShareModule,
        RouterModule,
        MyOwnCustomMaterialModule
    ],
    declarations: [
        BlogComponent,
        HeaderComponent,
        BlogContentComponent,
        ToolsComponent,
        BlogBoardComponent,
        BlogEditorComponent
    ],
    exports: [],
    entryComponents: [BlogEditorComponent]
})
export class BlogModule { }
