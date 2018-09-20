import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthCalendarComponent } from './month-calendar/month-calendar.component';
import { YearCalendarComponent } from './year-calendar/year-calendar.component';
import { CalendarService } from './calendar.service';
import { SharedModule } from '../shared/shared.module';
import { CalendarManagerComponent } from './calendar-manager/calendar-manager.component';
import { ClockModule } from '../clock/clock.module';

@NgModule({
  imports: [ CommonModule, SharedModule, ClockModule ],
  providers: [CalendarService], // singleton
  declarations: [MonthCalendarComponent, YearCalendarComponent, CalendarManagerComponent]
})
export class CalendarModule { }
