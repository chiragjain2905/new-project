import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
public detail

  constructor(private covid:CoronaService) { }

  ngOnInit(): void {
    
  }
  
  getData(){
    this.covid.getCityDetails()
    .subscribe(res=>
      this.detail=res.data
    )};
public cityName;
cityConfirmed;
cityDead;
cityRecovered
cil;
    getcityData(data:string){
      this.covid.getCityDetails()
      .subscribe(res=>{
        res.data.forEach(element => {
          if(element.location.toLowerCase()==data.toLowerCase()){
            this.cityName=element.location
            this.cityConfirmed=element.confirmed
            this.cityDead=element.dead
            this.cityRecovered=element.recovered
            this.cil=":"


            

            
          }
        });
      })
  

}
}