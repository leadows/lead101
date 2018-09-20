import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { ClockManagerComponent } from './clock-manager/clock-manager.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [AnalogClockComponent, ClockManagerComponent],
  exports : [AnalogClockComponent]
})
export class ClockModule { }
