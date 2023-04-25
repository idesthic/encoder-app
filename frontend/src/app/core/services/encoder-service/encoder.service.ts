import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserData} from "../../models/userData";
import {Observable} from "rxjs";

let httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", 'Content-Type': 'application/json' })
}

let userToken:string = '';

@Injectable({
  providedIn: 'root'
})
export class EncoderService {
  serverUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  signIn(userData: UserData) {
    return this.http.post(this.serverUrl + '/login', userData, httpOptions);
  }

  saveToken(token: string) {
   userToken = token;
  }

  encodeString(userString: any):Observable<any> {
    let httpAuthorization = {
      headers: new HttpHeaders({'authorization': userToken, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", 'Content-Type': 'application/json' })
    }

    return this.http.post(this.serverUrl + '/encode', userString, httpAuthorization);
  }
}
