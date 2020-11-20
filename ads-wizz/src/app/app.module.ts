import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdsHeaderComponent } from './ads-header/ads-header.component';
import { AdsTableComponent } from './ads-table/ads-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsHeaderComponent,
    AdsTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
