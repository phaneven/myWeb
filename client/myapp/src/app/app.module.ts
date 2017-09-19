import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';
/* route */
import { routing, appRoutingProviders } from './app.routes';
/* App Root*/
import { AppComponent } from './app.component';



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
        HomeModule,
        BlogModule,
        routing, 
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
