import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  readonly APIUrl ="";

  constructor(private http:HttpClient) { }

  getProjectList():Observable<any[]>{
    return this.http.get<any[>](this.APIUrl +'')
  }

  // methods to consume the get, post, update and delete  Apis here.

}
