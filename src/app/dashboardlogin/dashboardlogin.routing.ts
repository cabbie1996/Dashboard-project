import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardloginComponent } from './dashboardlogin.component';

const routes: Routes = [
  { path: '', component: DashboardloginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardloginRoutingModule { }