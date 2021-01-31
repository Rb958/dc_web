import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {HttpClientModule} from "@angular/common/http";
import {NotifierComponent} from "./core/utils/notifier/notifier/notifier.component";
import {NotifierModule} from "./core/utils/notifier/notifier.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  entryComponents:[NotifierComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
