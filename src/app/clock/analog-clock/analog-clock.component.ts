import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'analogclock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit {

  public subscription : Subscription ;

  constructor(public ss : SharedService) { 
    this.subscription = this.ss.observable1.subscribe( obj => {
      console.log ( "Analog Clock: ", obj.year );
    } );
  }


  ngOnDestroy() {
    clearInterval(this.timerid);
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  @ViewChild("cnv")
  public canvas: ElementRef; // var canvas = document.getElementById("canvas");

  private timerid: any;

  ngAfterViewInit(/* this */) {
    var ctx = this.canvas.nativeElement.getContext("2d");
    var radius = this.canvas.nativeElement.height / 2;
    ctx.translate(radius, radius); // moving drawing origin to the center
    radius = radius * 0.90;
    this.drawClock(ctx, radius);
    this.timerid = setInterval(() => this.drawClock(ctx, radius), 1000); // starts the timer
  }


  drawClock(/* this */ ctx, radius) {
    this.drawFace(ctx, radius);
    this.drawNumbers(ctx, radius);
    this.drawTime(ctx, radius);
  }

  drawFace(/* this */ ctx, radius) {
    var grad;
    ctx.beginPath();

    ctx.arc(0, 0, radius, 0, 2 * Math.PI); // setting
    ctx.fillStyle = 'white'; // setting
    ctx.fill(); // performs drawing of arc with fill color

    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05); // setting
    grad.addColorStop(0, '#337ab7'); // setting
    grad.addColorStop(0.5, 'white'); // setting
    grad.addColorStop(1, '#337ab7'); // setting
    ctx.strokeStyle = grad; // setting

    ctx.lineWidth = radius * 0.1; // setting
    ctx.stroke(); // performs drawing

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI); // setting
    ctx.fillStyle = '#337ab7'; // setting
    ctx.fill(); // performs drawing
  }

  drawNumbers(/* this */ ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  drawTime(/* this */ ctx, radius) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
      (minute * Math.PI / (6 * 60)) +
      (second * Math.PI / (360 * 60));
    this.drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    this.drawHand(ctx, minute, radius * 0.75, radius * 0.07);
    // second
    second = (second * Math.PI / 30);
    this.drawHand(ctx, second, radius * 0.9, radius * 0.02);
  }

  drawHand(/* this */ ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);

    ctx.stroke();

    ctx.rotate(-pos);
  }

}
