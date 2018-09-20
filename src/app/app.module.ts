import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';
import { CalendarModule } from './calendar/calendar.module';
import { SharedModule } from './shared/shared.module';

import { RouterModule, Route } from "@angular/router";
import { AccountManagerComponent } from './account/account-manager/account-manager.component';
import { CalendarManagerComponent } from './calendar/calendar-manager/calendar-manager.component';
import { ClockModule } from './clock/clock.module';
import { ClockManagerComponent } from './clock/clock-manager/clock-manager.component';

let routes : Route[] = [
  { 
    path : "account",
    component : AccountManagerComponent
  },
  { 
    path : "calendar",
    component : CalendarManagerComponent
  },
  {
    path : "clock",
    component : ClockManagerComponent
  },
  {
    path :"",
    redirectTo : "account",
    pathMatch : "full"
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    CalendarModule,
    SharedModule,
    RouterModule.forRoot(routes),
    ClockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
