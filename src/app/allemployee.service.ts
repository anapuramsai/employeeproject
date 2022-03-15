import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllemployeeService {

  constructor(private httpClient:HttpClient) { }
  getallemployees():Observable<any>
  {
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees")
  }
  getFilteredallemployees(search:any):Observable<any>
  {
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+"?filter="+search)
  }
  getSortByallemployees(column:any,order:any):Observable<any>
  {
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+"?SortBy="+column+"&order="+order)
  }
  getpageallemployees(page:any,limit:any):Observable<any>
  {
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+"?page="+page+"&limit="+limit)
  }
}
