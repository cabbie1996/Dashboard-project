import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-dashboardcontent',
  templateUrl: './dashboardcontent.component.html',
  styleUrls: ['./dashboardcontent.component.scss']
})
export class DashboardcontentComponent implements OnInit {
  @ViewChild('content') content:ElementRef

  delete_email(){
  return localStorage.removeItem('email_address');
  }
  constructor(private http: HttpClient) { }
  Users;
  data;

  //get value from local storage and print it in HTML
  get email(): any {
    return localStorage.getItem('email_address');
}

  downloadpdf(){
    const doc=new jsPDF();
    // doc.text('downloaded',10, 10);
    let content=this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,25,{
      'width':190  
    })
    doc.save('test.pdf');
  }

  ngOnInit() {
    // this.http.get('https://agentapis.wattcrm.com/agent/contract/').subscribe(res => {
    //     if (res['status'] == true) {
    //       console.log(res['message'])
    //       // this.Users = res['message']
    //     } else {
    //       console.log(res)
    //     }
    //   });

    this.http.get('http://192.168.100.43:8001/agent/contract/'
          ,{
            'headers':{
              'Authorization':`AJT ${localStorage.getItem('token')}`,
            }
          } 
          ).subscribe(res=>{
            console.log(res);
            this.data=res;
            console.log(this.data.EmailAdd);

            //set value in local storage with the name of EmailAdress
            localStorage.setItem('email_address', res['EmailAdd']);

          })
    
    }
}
