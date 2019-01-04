import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardhomecontentComponent } from './dashboardhomecontent/dashboardhomecontent.component';
import { DashboardsettingcontentComponent } from './dashboardsettingcontent/dashboardsettingcontent.component';
import { DashboardoptionComponent } from './dashboardoption/dashboardoption.component';
import { DashboardloginComponent } from './dashboardlogin/dashboardlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardcontentComponent } from './dashboardcontent/dashboardcontent.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { SettingviewComponent } from './settingview/settingview.component';
import { OptionviewComponent } from './optionview/optionview.component';
import { ContentviewComponent } from './contentview/contentview.component';
import { SignupComponent } from './signup/signup.component';
import { UserService, OnlyLoggedInUsersGuard } from './auth.service';
import { ErrorComponent } from './error/error.component';

import { DrawerComponent } from './drawer/drawer.component';



const routes: Routes = [
  // { path:'home' , component: DashboardhomecontentComponent },
  // { path: 'setting', component: DashboardsettingcontentComponent},
  // { path: 'option', component: DashboardoptionComponent},
  // { path:'content', component: DashboardcontentComponent},
  // { path:'dashboard', component: HomeStartComponent },

  // { path: 'dashboardview' , component: DashboardviewComponent },
  // { path:'settingview' , component: SettingviewComponent},
  // { path:'optionview' , component:OptionviewComponent},
  // { path:'contentview' , component: ContentviewComponent },
  // { path:'signup' , component:SignupComponent},
  // { path : '', component: DashboardloginComponent},


  { path: '', loadChildren: './dashboardlogin/dashboardlogin.module#AboutModule'},
  { path: 'signup', component: SignupComponent },
  // { path: '', component: DashboardloginComponent },
  { path: 'login', redirectTo: '' },
  {
    path: 'dashboardview', component: DashboardviewComponent,
    canActivate: [OnlyLoggedInUsersGuard],
    children: [
      { path: '', component: DashboardhomecontentComponent },
      { path: 'settingview', component: SettingviewComponent },
      { path: 'optionview', component: OptionviewComponent },
      { path: 'contentview', component: ContentviewComponent }
    ]
  },
  { path: '**', component: ErrorComponent },
  { path:'drawer',component: DrawerComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



