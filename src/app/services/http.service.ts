import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private regionalbloc = "USAN";
  private urlBase = "https://restcountries.eu/rest/v2/regionalbloc/"; // URL to web api

  public getPais(): Observable<any[]> {
    return this.http.get<any[]>(this.urlBase + this.regionalbloc);
  }
}
