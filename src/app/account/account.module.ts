import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './account.service';
import { SharedModule } from '../shared/shared.module';
import { AccountManagerComponent } from './account-manager/account-manager.component';

import { ReactiveFormsModule } from "@angular/forms" ;
import { HttpClientModule } from "@angular/common/http" ;

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule, HttpClientModule],
  providers: [AccountService], // singleton
  declarations: [RegisterComponent, LoginComponent, AccountManagerComponent]
})
export class AccountModule { }
