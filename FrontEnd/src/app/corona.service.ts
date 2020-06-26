import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient ) { }

  getCoronaDetails():any{
    return this.http.get('https://www.trackcorona.live/api/countries');
 
  }
  getCountryDetails():any{
   return this.http.get('https://www.trackcorona.live/api/countries');
   
  }
  getProvinceDetails():any{
   return this.http.get('https://www.trackcorona.live/api/provinces');
  }
  getTravelDetails():any{
    return this.http.get('https://www.trackcorona.live/api/travel');
 
  }
  getCityDetails():any{
   return this.http.get('https://www.trackcorona.live/api/cities');
  }
  getNewsDetails():any{
    return this.http.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-24&sortBy=publishedAt&apiKey=7c81fb6aa1c84d57b9863aa84307f3db')
  }
}

