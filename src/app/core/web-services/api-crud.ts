import {Observable} from 'rxjs';
import {ApiDataResponseModel} from '../models/api-data/api-data-response-model';

export interface APICrud<T> {
  create(object : T) : Observable<ApiDataResponseModel<T>>;
  update(object : T) : Observable<ApiDataResponseModel<T>>;
  getOne(idObject : any) : Observable<ApiDataResponseModel<T>>;
  getAll() : Observable<ApiDataResponseModel<Array<T>>>;
  delete(idObject : any) : Observable<ApiDataResponseModel<T>>;
}
