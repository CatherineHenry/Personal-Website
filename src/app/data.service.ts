import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  // this could/should be done in front end but I wanted to try connecting to a java backend
  get_date() {
    return this.httpClient.get(this.baseUrl + '/date');
  }


}