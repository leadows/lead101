import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public baseUrl: string = "http://localhost:3000";

  public subject1  = new Subject<any>() ;
  public observable1 = this.subject1.asObservable();
  
  public subject2  = new Subject<any>() ;
  public observable2 = this.subject2.asObservable();

  constructor() { }

}
