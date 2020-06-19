import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorldTimeApiResponse } from '../model/world-time-api-response';

@Injectable({
  providedIn: 'root'
})
export class WorldTimeService {

  apiUrl = 'http://worldtimeapi.org/api/timezone/'
  timezone: string;

  constructor(
    private http: HttpClient
  ) { }

  getWorldTime(timezone: string) {
    return this.http.get<WorldTimeApiResponse>(this.apiUrl + timezone);
  }
}
