import { NgModule } from '@angular/core';

import { DashboardloginRoutingModule } from './dashboardlogin.routing';
import { DashboardloginComponent } from './dashboardlogin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    DashboardloginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [DashboardloginComponent],
  providers: [],
})
export class AboutModule { }