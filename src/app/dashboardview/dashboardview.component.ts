import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardhomecontentComponent } from '../dashboardhomecontent/dashboardhomecontent.component';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardview',
  templateUrl: './dashboardview.component.html',
  styleUrls: ['./dashboardview.component.scss']
})
export class DashboardviewComponent implements OnInit {

  constructor(private titleService: Title,private route:Router) { 
  }
  ngOnInit() {   
    this.titleService.setTitle("Dashboard");
  }

}
