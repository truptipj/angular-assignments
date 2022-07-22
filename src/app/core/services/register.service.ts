import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  registerPostData(url:any,data:any):Observable<any>{
    console.log(data);
    console.log(url);
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    return this.http.post(url, body,{'headers':headers})
   }
}
