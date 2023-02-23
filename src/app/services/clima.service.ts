import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  apiKey = 'e33ef047d152e691cc45ead54d3fa0b9';
  url = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&q=`;
  constructor(private http: HttpClient) {}

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + ciudad;
    return this.http.get(URL);
  }
}
