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
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdsHeaderComponent,
    AdsTableComponent,
    AdsFilterComponent,
    CurrencyPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
