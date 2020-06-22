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
  ngOnInit(): void {
  }
  getData(){
    this.covid.getTravelDetails()
    .subscribe(res=>this.det=res);
  }
  }
