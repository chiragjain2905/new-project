import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';
@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  constructor(private covid:CoronaService) { }
public det;
  ngOnInit(): void {
  }
  getData(){
    this.covid.getProvinceDetails()
    .subscribe(res=>this.det=res.data);
  }
}
