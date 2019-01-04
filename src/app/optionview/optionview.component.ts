import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-optionview',
  templateUrl: './optionview.component.html',
  styleUrls: ['./optionview.component.scss']
})
export class OptionviewComponent implements OnInit {

  constructor(public titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle("Option");
  }

}
