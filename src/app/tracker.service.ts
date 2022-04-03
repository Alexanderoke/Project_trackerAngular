import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  readonly APIUrl ="/api/users?page=2";

  constructor(private http:HttpClient) { }

  getUsersList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/project/')
  }

  // methods to consume the get, post, update and delete  Apis here.

}
