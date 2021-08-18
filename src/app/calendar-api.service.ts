import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {

  private apiKey:string = "ba2e4dfa3ba60adc04e45b9b0d4225ec9e2b2373";
  private baseUrl: string = "https://calendarific.com/api/v2";

  constructor(private http: HttpClient) { }

  //get all holidays
  //pass in required parameters(api_key, country & year) with the base url
  getAllHolidays(){
    return this.http.get(this.baseUrl + '/holidays?api_key=' + this.apiKey + '&country=SG&year=2021');
  }


}
