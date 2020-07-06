import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public detail;
  public countryData;
  constructor(private covid:CoronaService) { }

  countryName;
  countryConfirmed;
  countryDead;
  countryRecovered
  cil;
  va;
  vb;


  ngOnInit(): void {
    

  }
 
  getData(){
    this.covid.getCountryDetails()
    .subscribe(res=>{
      this.detail=res.data;
   
      
    })
    document.getElementById("panel").style.display = "block"
  }

  getIndiaData(data:string){

    this.covid.getCountryDetails()
    .subscribe(res=>{
      res.data.forEach(element => {
        if(element.location.toLowerCase()==data.toLowerCase()){
          this.countryName=element.location;
          this.countryConfirmed=element.confirmed;
          this.countryDead=element.dead;
          this.countryRecovered=element.recovered
          this.cil=":";
          
        
        }
      });
      console.log(this.detail)
    });
  }
}
