import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule}from'@angular/common/http';
import { CoronaService } from './corona.service';

import {FormsModule} from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageHeaderComponent } from './main-page-header/main-page-header.component';
import { MainPageFooterComponent } from './main-page-footer/main-page-footer.component';
import { MainPageHomeComponent } from './main-page-home/main-page-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component'
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainPageComponent,
    MainPageHeaderComponent,
    MainPageFooterComponent,
    MainPageHomeComponent,
    DashboardComponent,
    JumbotronComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  

  ],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
