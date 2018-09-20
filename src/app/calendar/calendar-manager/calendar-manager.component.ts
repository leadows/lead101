import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-manager',
  templateUrl: './calendar-manager.component.html',
  styleUrls: ['./calendar-manager.component.css']
})
export class CalendarManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public mn : number = 1 ;

  send(value) {
    this.mn = value ;
  }

}
