import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.css']
})
export class MainPageHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  nav(dt){
    this.router.navigate([dt])
    console.log(dt)
  }

}
