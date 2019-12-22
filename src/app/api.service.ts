import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})



export class ApiService {
  private baseUrl = "localhost:8000/";
  private localUrl = 'api/token';

  constructor(private HttpClient:HttpClient) { }

  login(object, httpOptions) {
    return this.HttpClient.post<any>(this.baseUrl+this.localUrl,object,httpOptions)
  }
  
  getBaseUrl() {
    return this.baseUrl;
  }
}
