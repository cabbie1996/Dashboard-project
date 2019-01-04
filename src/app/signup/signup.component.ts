import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  login() {
    this.router.navigate(['']);
  }

  ngform = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    zip: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirm_password: new FormControl(),

  })

  //Ammar Sign up API for 
  SignupApi() {
    this.http.post('http://192.168.100.30:8001/account/register/', this.ngform.value, {
      'headers': {
        'Content-Type': 'application/json'
      }
    }).subscribe(res => {
      console.log(res)
      this.router.navigate([""]);
    });
  }
  constructor(private router: Router, public titleService: Title, public http: HttpClient) { }
  ngOnInit() {
    this.titleService.setTitle("Signup")
  }

}
