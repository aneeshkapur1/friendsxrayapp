import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from './contactus/Email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http : HttpClient) { 

  }

  private baseUrl  = "https://13.235.132.14:9090/email/";

  sendEmail(email : Email): Observable<any>{
    return this.http.post(`${this.baseUrl}`, email);
  }
}
