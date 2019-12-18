import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  account:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  user:any = null;
  role:string = '';
}
