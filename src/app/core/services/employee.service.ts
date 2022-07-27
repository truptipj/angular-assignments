import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private http:HttpClient
  ) { }


  deleteEmployee(id:number):Observable<any>{
    return this.httpClient.delete(`${environment.baseUrl}/Employee/${id}`)
  }
  addEmployee(obj:any): Observable<any>{
  
    return this.httpClient.post(`${environment.baseUrl}Employee`,obj);
  }
  getEmployee(): Observable<any>{
 
    return this.httpClient.get(`${environment.baseUrl}Employee`)
  }
  
  updateEmployee(updatedata:string): Observable<any>{
  
    return this.httpClient.put(`${environment.baseUrl}Employee`,updatedata);

  }
}

