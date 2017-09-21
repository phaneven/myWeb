import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdSidenavModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterModule,
        MdButtonModule, MdSidenavModule, MdMenuModule, MdToolbarModule, MdIconModule
    ],
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent,
    ]
})
export class ShareModule { }
