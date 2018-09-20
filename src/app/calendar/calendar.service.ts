import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  public calendarState = [];

  public setState(id, year, month) {
    let obj = this.calendarState.find(state => state.id == id);
    if (obj) { // if obj is NOT undefined or null
      obj.year = year;
      obj.month = month;
    } else { // if obj is undefined or null
      this.calendarState.push({ id, year, month });
    }
  }

  public getState(id) {
    let obj = this.calendarState.find(state => state.id == id);

    // if obj is undefined or null
    if (!obj) return null;

    return { year: obj.year, month: obj.month };
  }

}
