import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public fg: FormGroup;

  constructor(public fb: FormBuilder, public as: AccountService) {
    this.fg = fb.group({
      username: ["", Validators.compose([Validators.required, Validators.minLength(4)])], // represent UI control
      password: ["", Validators.compose([Validators.required, Validators.minLength(4)])]  // represent UI control
    });
  }

  ngOnInit() {
  }

  submit() {
    this.as.loginAsync(this.fg.controls.username.value, 
                       this.fg.controls.password.value,
                       () => { alert ("success") ; },
                       () => { alert ("error") ;} );
    // disable login button
  }

}
