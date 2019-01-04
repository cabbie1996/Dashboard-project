import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboardsettingcontent',
  templateUrl: './dashboardsettingcontent.component.html',
  styleUrls: ['./dashboardsettingcontent.component.scss']
})
export class DashboardsettingcontentComponent implements OnInit {

  form(){
    // localStorage.clear();

    console.log("yes")
      this.http.get('http://192.168.100.43:8001/agent/contract/'
      ,{
        'headers':{
          'Authorization':'AJT'+ ' ' + localStorage.getItem('token'),
        }
      }
      ).subscribe(res=>{
        console.log(res);
      })
      // localStorage.clear();

      // this.http.get('http://192.168.100.43:8001/agent/contract/'
      // ,{
      //   'headers':{
      //     'Authorization':`AJT ${localStorage.getItem('token')}`,
      //   }
      // } 
      // ).subscribe(res=>{
      //   console.log(res);
      // })
  } 
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { 
  //   localStorage.clear();
  }

  ngOnInit() {
  }

}
