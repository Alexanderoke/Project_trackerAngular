import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apireceive } from './apireceive';
@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  readonly APIUrl = "https://trakadrf.herokuapp.com/project/";

  constructor(private http:HttpClient) { }

   getProjectList(): Observable <Apireceive>{
     return this.http.get<Apireceive>(this.APIUrl + '/project/');


  // uploadProject(val:any){
  // return this.http.post(this.APIUrl + '/project/',val);

  // methods to consume the get, post, update and delete  Apis here.

}
}
