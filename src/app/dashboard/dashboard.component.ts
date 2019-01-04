import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  deleteToken(){
    localStorage.clear();
  }
  constructor() { }

  ngOnInit() {
  }

}
