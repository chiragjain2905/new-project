import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule}from'@angular/common/http';
import { CoronaService } from './corona.service';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { ProvinceComponent } from './province/province.component';
import { TravelComponent } from './travel/travel.component';
import { NewsComponent } from './news/news.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CityComponent,
    ProvinceComponent,
    TravelComponent,
    NewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
