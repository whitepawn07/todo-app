import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class ApiService {


  private baseUrl = "http://localhost:8000/api/"
  constructor(private HttpClient:HttpClient) { }

  login(credentials:object) {
    return this.HttpClient.post<any>(this.baseUrl+'login/',credentials,{}).pipe(
      map(user=> {
        console.log(user)
        localStorage.setItem('_token', JSON.stringify(user));
        // this.currentUserSubject.next(user);
        return user;
      })
      // catchError(this.handleError)
    );
  }
  
  getBaseUrl() {
    return this.baseUrl;
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg)
  }
}
