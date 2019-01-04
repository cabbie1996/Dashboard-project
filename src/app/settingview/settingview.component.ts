import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardsettingcontentComponent } from '../dashboardsettingcontent/dashboardsettingcontent.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-settingview',
  templateUrl: './settingview.component.html',
  styleUrls: ['./settingview.component.scss']
})
export class SettingviewComponent implements OnInit {

  constructor(public titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle("Setting");
  }

}
