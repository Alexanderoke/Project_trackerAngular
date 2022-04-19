import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { Apireceive } from './apireceive';
@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  readonly APIUrl = "https://protrackerokedrf.herokuapp.com";
  // "https://trakadrf.herokuapp.com/project"
  readonly PhotoUrl = "https://protrackerokedrf.herokuapp.com/media"

  constructor(private http:HttpClient) { }

   getProjectList(): Observable <any[]>{
     return this.http.get<any[]>(this.APIUrl+ '/project/' );  
}

  uploadProject(input:any){
  return this.http.post<any>(this.APIUrl +'/project/',input);
  }

  UploadPhoto(val:any){
    return this.http.post(this.PhotoUrl+'/SaveFile/', val);
  }


  updateProject(val:any){
    return this.http.put(this.APIUrl +'/project/9',val);
  }

  deleteProject(del:any){
    return this.http.delete(this.APIUrl + '/project/',del);
  }

  registerUser(userData: any): Observable<any>{
    return this.http.post('https://protrackerokedrf.herokuapp.com/api/register/',userData);
  }

  loginUser(userData: any): Observable<any>{
    return this.http.post('https://protrackerokedrf.herokuapp.com/api/login/',userData)
  }
  // methods to consume the get, post, update and delete  Apis here.
}
