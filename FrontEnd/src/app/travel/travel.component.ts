import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor(private covid:CoronaService) { }
public det;

countryName;
countryData;
countryArr;

  ngOnInit(): void {
  }
  getData(){
    this.covid.getTravelDetails()
    .subscribe(res=>this.det=res.data);
    document.getElementById("panel").style.display = "block";
  }

  getCountryData(data){
    console.log("in contry data")
    this.covid.getTravelDetails()
      .subscribe(res=>{
        res.data.forEach(element => {
          if(element.location.toLowerCase()==data.toLowerCase()){
            this.countryName=element.location

             this.countryArr=element.data.split("\n")
             console.log(this.countryArr)      
          }
        });
      })
  
  }

  }
