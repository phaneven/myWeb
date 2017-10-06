import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from '../material-module';
import { ManagementComponent } from './management/management.component';
import { BoardComponent } from './board.component';

@NgModule({
    declarations: [
        ManagementComponent,
        BoardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MyOwnCustomMaterialModule
    ],
    exports: [
    ]
})
export class BoardModule { }
