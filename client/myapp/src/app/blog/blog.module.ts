import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule} from '../material-module';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog.component';
import { HeaderComponent } from './header/header.component';
import { BlogContentComponent, SafeHtmlPipe } from './blog-content/blog-content.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { BlogBoardModule } from './blog-board/blog-board.module';

import { ToolsComponent } from './tools/tools.component';
// import { BlogBoardComponent} from './blog-board/blog-board.component';
import { BlogEditorComponent } from './blog-board/blog-editor/blog-editor.component';
import { QuillModule } from 'ngx-quill';
import { BlogPageComponent } from './blog-page/blog-page.component';
@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ShareModule,
        RouterModule,
        MyOwnCustomMaterialModule,
        QuillModule,
        FormsModule,
    ],
    declarations: [
        BlogComponent,
        HeaderComponent,
        BlogContentComponent,
        ToolsComponent,
        SafeHtmlPipe,
        BlogPageComponent,
    ],
    exports: [],
    entryComponents: [
        BlogEditorComponent
    ]
})
export class BlogModule { }
