import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from '../../material-module';
import { QuillModule } from 'ngx-quill';

import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { BlogBoardComponent } from './blog-board.component';
import { BlogListComponent } from './blog-list/blog-list.component';


@NgModule({
    imports: [
        FormsModule,
        MyOwnCustomMaterialModule,
        QuillModule
    ],
    declarations: [
        BlogEditorComponent,
        BlogBoardComponent,
        BlogListComponent
    ],
})
export class BlogBoardModule { }
