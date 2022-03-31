import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  readonly APIUrl ="";

  constructor(private http:HttpClient) { }

  // methods to consume the get, post, update and delete  Apis here.

}
