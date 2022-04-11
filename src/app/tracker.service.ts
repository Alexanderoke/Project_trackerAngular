import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Apireceive } from './apireceive';
@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  readonly APIUrl = "http://127.0.0.1:8000/api/register/";
  // "https://trakadrf.herokuapp.com/project"

  constructor(private http:HttpClient) { }

   getProjectList(): Observable <any[]>{
     return this.http.get<any[]>(this.APIUrl );  
}

  uploadProject(val:any){
  return this.http.post(this.APIUrl,val);
  }

  registerUser(userData: any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/register/',userData)
  }
  // methods to consume the get, post, update and delete  Apis here.
}
