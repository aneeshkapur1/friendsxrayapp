import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of } from 'rxjs';
import {retry} from 'rxjs/operators'
import { CovidData } from './CovidData';

@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {

  covidConfirmEndPoint:string;
  covidRecoveredEndPoint:string;
  covidDeathEndPoint:string;


  constructor(private http:HttpClient) { 

    this.covidConfirmEndPoint = 'https://api.covid19api.com/dayone/country/india/status/confirmed/live'
    this.covidRecoveredEndPoint = 'https://api.covid19api.com/dayone/country/india/status/recovered/live'
    this.covidDeathEndPoint =  'https://api.covid19api.com/dayone/country/india/status/deaths/live';
  
  }

  getCovidConfirmedCases() : Observable<Array<CovidData>>{
    
    const url = this.covidConfirmEndPoint;
    return this.http.get<CovidData[]>(url);
  }

  getCovidRecoveredCases(){
    const url = this.covidRecoveredEndPoint;
    return this.http.get<CovidData[]>(url);
  }

  getCovidDeathCases() 
  {
    const url = this.covidDeathEndPoint;
    return this.http.get<CovidData[]>(url);
  }


}



