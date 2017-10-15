import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';
import { BoardModule } from './board/board.module';
/* route */
import { routing, appRoutingProviders } from './app.routes';
/* App Root*/
import { AppComponent } from './app.component';

import { LoginDialogComponent } from './share/login/login.component';
// import { QuillModule } from 'ngx-quill';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HomeModule,
        BlogModule,
        BoardModule,
        routing,
        // QuillModule
    ],
    exports: [
    ],
    entryComponents: [
        LoginDialogComponent
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
