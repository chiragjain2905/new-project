import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public detail;
  constructor(private covid:CoronaService) { }

  ngOnInit(): void {
    

  }
 
  getData(){
    this.covid.getCountryDetails()
    .subscribe(res=>{
      this.detail=res.data
      console.log(this.detail)
    });
  }
}
