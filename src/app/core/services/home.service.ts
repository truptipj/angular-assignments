import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http:HttpClient) { }
  postData(url:any,data:any):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    return this.http.post(url, body,{'headers':headers})
   }

  getData(url:any):Observable<any> {
    return this.http.get(url);
  };
}
