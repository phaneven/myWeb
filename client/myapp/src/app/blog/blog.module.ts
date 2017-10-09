import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule} from '../material-module';

import { BlogComponent } from './blog.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { ToolsComponent } from './tools/tools.component';
import { BoardComponent } from './board/board.component';

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
        ContentComponent,
        ToolsComponent,
        BoardComponent,
    ],
    exports: [
        HeaderComponent
    ]
})
export class BlogModule { }
