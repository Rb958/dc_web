import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APICrud} from "./api-crud";
import {UserModel} from "../models/user/user-model";
import {Observable} from "rxjs";
import {ApiDataResponseModel} from "../models/api-data/api-data-response-model";
import {ServerUtil} from "../utils/server.util";

@Injectable({
  providedIn: 'root'
})
export class UserService implements APICrud<UserModel>{

  urlUser = "/api/user";
  urlregister = "/api/register";

  constructor(
    private http: HttpClient
  ) { }

  create(object: UserModel): Observable<ApiDataResponseModel<UserModel>> {
    return this.http.post<ApiDataResponseModel<UserModel>>(`${ServerUtil.getInstance().getServerUrl() + this.urlregister}`,object);
  }

  delete(idObject: any): Observable<ApiDataResponseModel<UserModel>> {
    return undefined;
  }

  getAll(): Observable<ApiDataResponseModel<Array<UserModel>>> {
    return undefined;
  }

  getOne(idObject: any): Observable<ApiDataResponseModel<UserModel>> {
    return undefined;
  }

  update(object: UserModel): Observable<ApiDataResponseModel<UserModel>> {
    return undefined;
  }

}
