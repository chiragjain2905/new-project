import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private covid:CoronaService) { }
public detail;
  ngOnInit( ): void {
  }
  getData(){
    this.covid.getNewsDetails()
    .subscribe(res=>{
      this.detail=res.articles
      console.log(this.detail)
    });
  }


}
