import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManagementApiService {
  apiUrl = 'http://localhost:8080/api/rescue_details';
  createUrl = 'http://localhost:8080/api/rescue_details/add';
  constructor(private http:HttpClient) { }

  //getAllData
  getAllRescueData(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  //create Rescue Data 
  createRescueData(data: any): Observable<any>{
    console.log(data, 'createapi=>');
    return this.http.post(`${this.createUrl}`, data);
  }

  //delete Data..
  deleteRescueData(tagnumber:any): Observable<any>{
    let tagId = tagnumber; 
    return this.http.delete(`${this.createUrl}/${tagId}`);
  }
}
