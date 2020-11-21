import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { AdsHeaderComponent } from './ads-header/ads-header.component';
import { AdsTableComponent } from './ads-table/ads-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AdsFilterComponent } from './ads-filter/ads-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsHeaderComponent,
    AdsTableComponent,
    AdsFilterComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatInputModule,
    NoopAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
