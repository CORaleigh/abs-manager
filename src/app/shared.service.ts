import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type * as esri from './esri';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  account:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  selectedProperty:any = null;
  user:any = null;
  role:string = '';
  billingParameters:esri.FeatureLayer = null;
  route:ActivatedRouteSnapshot = null;
}
