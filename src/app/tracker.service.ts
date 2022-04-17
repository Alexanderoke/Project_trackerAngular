import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { Apireceive } from './apireceive';
@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  readonly APIUrl = "http://127.0.0.1:8000";
  // "https://trakadrf.herokuapp.com/project"
  readonly PhotoUrl = "http://127.0.0.1:8000/media/"

  constructor(private http:HttpClient) { }

   getProjectList(): Observable <any[]>{
     return this.http.get<any[]>(this.APIUrl+ '/project/' );  
}

  uploadProject(input:any){
  return this.http.post<any>(this.APIUrl +'/project/',input);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile/', val);
  }


  updateProject(val:any){
    return this.http.put(this.APIUrl +'/project/',val);
  }

  deleteProject(del:any){
    return this.http.delete(this.APIUrl + '/project/',del);
  }

  registerUser(userData: any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/register/',userData);
  }

  loginUser(userData: any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/login/',userData)
  }
  // methods to consume the get, post, update and delete  Apis here.
}
