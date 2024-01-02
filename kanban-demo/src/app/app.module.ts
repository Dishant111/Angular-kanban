import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KanbangridComponent } from './kanbangrid/kanbangrid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPopupComponent } from './edit-popup/edit-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbangridComponent,
    EditPopupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
