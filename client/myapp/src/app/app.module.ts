import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';
/* route */
import { routing, appRoutingProviders } from './app.routes';
/* App Root*/
import { AppComponent } from './app.component';

import { LoginDialogComponent } from './share/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HomeModule,
        BlogModule,
        routing,
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
