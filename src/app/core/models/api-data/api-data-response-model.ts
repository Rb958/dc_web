import {HttpStatus} from '../../utils/http-status';

export class ApiDataResponseModel<T> {
  public message: string;
  public status: HttpStatus;
  public result: T;

  constructor(){
  }

}
