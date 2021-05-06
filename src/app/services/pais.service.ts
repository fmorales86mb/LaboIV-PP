import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  private regionalbloc = "EU";
  private urlBase = "https://restcountries.eu/rest/v2/regionalbloc/"; // URL to web api

  paisSel:Pais;

  public getPais(): Observable<any[]> {
    return this.http.get<any[]>(this.urlBase + this.regionalbloc);
  }
}
