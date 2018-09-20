import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers : [ SharedService],
  declarations: [DatePickerComponent],
  exports : [DatePickerComponent]
})
export class SharedModule { }
