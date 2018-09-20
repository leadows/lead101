import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(public http : HttpClient) { 
  }

  public loginInProgress : boolean = false ;

  public loginAsync(username : string, password : string, loginSuccess, loginError) {
    let credentials = { username, password };
    this.loginInProgress = true ;
    this.http.post("http://localhost:5000/login", credentials)
             .subscribe( result => {
                                      this.loginInProgress = false ;
                                      loginSuccess() ;
                                   },
                         error => {
                            this.loginInProgress = false ;
                            loginError();
                         });
  }

}
