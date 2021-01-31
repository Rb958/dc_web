import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ServerUtil} from "../utils/server.util";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = '/api/v2/login';
  private checkAdminUrl = "/api/check_admin"

  constructor(
    private http: HttpClient
  ) { }

  login(email, password) : Observable<any>{
    return this.http.post(`${ServerUtil.getInstance().getServerUrl() + this.loginUrl}`, {email: email, password: password});
  }

  adminExist(): Observable<any>{
    return this.http.get(`${ServerUtil.getInstance().getServerUrl() + this.checkAdminUrl}`);
  }
}
