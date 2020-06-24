import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';
import { NewsComponent } from './news/news.component';
import { ProvinceComponent } from './province/province.component';
import { TravelComponent } from './travel/travel.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageHomeComponent } from './main-page-home/main-page-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'',component:MainPageComponent,children:[
    { path:'',component:MainPageHomeComponent},
    { path:'city',component:CityComponent},
    { path:'country',component:CountryComponent},
    { path:'news',component:NewsComponent},
    { path:'province',component:ProvinceComponent},
    { path:'travel',component:TravelComponent}
  ]},
  {path:'dashboard',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents=[CityComponent,CountryComponent,NewsComponent,ProvinceComponent,TravelComponent]
