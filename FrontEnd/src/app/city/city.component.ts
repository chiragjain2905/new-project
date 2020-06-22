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
    );
 
  }

}
