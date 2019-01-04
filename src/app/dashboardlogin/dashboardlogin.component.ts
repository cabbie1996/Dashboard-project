import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboardlogin',
  templateUrl: './dashboardlogin.component.html',
  styleUrls: ['./dashboardlogin.component.scss']
})
export class DashboardloginComponent implements OnInit {

  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }


  ngform = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  post() {
    if (this.ngform.controls.email.value === "hassan" && this.ngform.controls.password.value === "1234") {
      this.router.navigate(["/signup"]);
      console.log("correct")
    }
    else {
      console.log("no");
    }

  }
  login() {
    // if(this.ngform.controls.username.value==="hassan" && this.ngform.controls.password.value==="1234"){
    // this.loggedIn.next(true);
    // this.router.navigate(['/dashboard']);
    // }

  }
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(["/dashboardview"]);
    } else {
      this.router.navigate(["/"]);
    }
  }

  loginApi() {

    this.http.post('http://192.168.100.43:8001/config/login/', this.ngform.value, {
      'headers': {
        'Content-Type': 'application/json'
      }
    }).subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res['token']);
      localStorage.setItem('res', res['']);
      console.log(localStorage.getItem('token'))
      if (res['status'] == true) {
        console.log("yes");
        this.router.navigate(["/dashboardview"]);
      
      //Get API from agent contract
        
      //   this.http.get('http://192.168.100.43:8001/agent/contract/'
      //     , {
      //       'headers': {
      //         'Authorization': `AJT ${localStorage.getItem('token')}`,
      //       }
      //     }
      //   ).subscribe(res => {
      //     console.log(res);
      //   })
      }
      else
        console.log("incorrect");
    });
  }

//ammar API for Login

  test() {
    this.http.post('http://192.168.100.30:8001/account/login/', this.ngform.value, {
      'headers': {
        'Content-Type': 'application/json'
      }
    }).subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res['token']);
      localStorage.setItem('res', res['']);
      console.log(localStorage.getItem('token'));
      if (res['token'] !== null) {
        console.log("yes");
        this.router.navigate(["/dashboardview"]);
        console.log("successfully login")
      }
      else{
        console.log("incorrect");
      }       
    });
  }

}