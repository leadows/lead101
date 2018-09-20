import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'monthcalendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.css']
})
export class MonthCalendarComponent {

  // Instance Data Members
  @Input() // to receive values from parent
  public year: number; // default value will be "undefined"

  @Input() // tp receive values from parent
  public month: number; // default value will be "undefined"

  public days: number[]; // default value will be "undefined"

  //statis is not available to HTML
  public static daysNames: string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  @Input()
  public id: number;

  public getDayNames(/* this */): string[] {
    return MonthCalendarComponent.daysNames;
  }

  public previous(/* this */): void {
    if (this.month == 0) {
      this.month = 12;
      if (this.year > 1)
        this.year--;
      else
        return;
    } else {
      this.month--;
    }
    this.createCalendar();
  }

  public next(/* this */): void {
    if (this.month == 12) {
      this.month = 1;
      this.year++;
    } else {
      this.month++;
    }
    this.createCalendar();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.createCalendar();
  }

  // after the component OBJECT is created
  constructor(/* this = reference of newly created object */ public cs: CalendarService, public ss: SharedService) {
    // here instance data members are created
    // if the instance data members are defined and intialized outside the ctor
    // they are actual moved instance by the TS compiler
    let current = new Date(); // Date is predefined class
    this.year = current.getFullYear();
    this.month = current.getMonth() + 1;
  }

  // this is called after input values come in and get store @Input decorated instance
  // data members
  ngOnInit(/* this = reference of the calling object */) {

    let state = this.cs.getState(this.id);

    if (state) {
      this.year = state.year;
      this.month = state.month;
    }

    this.createCalendar();

  }

  ngOnDestroy() {
    this.cs.setState(this.id, this.year, this.month);
  }

  private createCalendar(): void {

    this.ss.subject1.next({year : this.year, month: this.month});
    
    // get the number of days
    let daysInMonth = new Date(this.year, this.month, 0).getDate();

    // get the first day of the month and which day it is week
    // Su - 0, Mo - 1, :::, Sa - 6
    let firstDayOfWeek = new Date(this.year, this.month - 1, 1).getDay();

    // filling the array with days
    this.days = new Array(42);
    for (let i = firstDayOfWeek, day = 1; day <= daysInMonth; i++ , day++) {
      this.days[i] = day;
    }

  }
}
