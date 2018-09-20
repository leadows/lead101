import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $ : any ; 

@Component({
  selector: 'datepicker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild("datepicker")
  public datepicker : ElementRef ;

  ngAfterViewInit() {
    $(this.datepicker.nativeElement).datepicker();
  }

}
