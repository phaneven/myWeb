import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
/* App Root*/
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component'

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ContentComponent, MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
