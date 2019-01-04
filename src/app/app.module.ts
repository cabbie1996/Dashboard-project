import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardhomecontentComponent } from './dashboardhomecontent/dashboardhomecontent.component';
import { DashboardsettingcontentComponent } from './dashboardsettingcontent/dashboardsettingcontent.component';
import { DashboardoptionComponent } from './dashboardoption/dashboardoption.component';
// import { DashboardloginComponent } from './dashboardlogin/dashboardlogin.component';
import { DashboardcontentComponent } from './dashboardcontent/dashboardcontent.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { RouterModule } from '@angular/router';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { SettingviewComponent } from './settingview/settingview.component';
import { OptionviewComponent } from './optionview/optionview.component';
import { ContentviewComponent } from './contentview/contentview.component';
import { SignupComponent } from './signup/signup.component';
import { UserService,OnlyLoggedInUsersGuard} from './auth.service';
import { ErrorComponent } from './error/error.component';
import { DrawerComponent } from './drawer/drawer.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardhomecontentComponent,
    DashboardsettingcontentComponent,
    DashboardoptionComponent,
    // DashboardloginComponent,
    DashboardcontentComponent,
    HomeStartComponent,
    DashboardviewComponent,
    SettingviewComponent,
    OptionviewComponent,
    ContentviewComponent,
    SignupComponent,
    ErrorComponent,
    DrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    HttpModule,
  ],
  providers: [
    UserService,
    OnlyLoggedInUsersGuard, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
