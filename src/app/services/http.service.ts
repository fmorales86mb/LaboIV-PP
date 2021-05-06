import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private user = "fmorales86mb";
  private urlBase = "https://api.github.com/users/";

  public getData() {
    return this.http.get<any[]>(this.urlBase + this.user);
  }
}
