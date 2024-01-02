import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KanbangridComponent } from './kanbangrid/kanbangrid.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbangridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
