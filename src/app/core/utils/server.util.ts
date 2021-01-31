import {HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {environment} from "../../../environments/environment";
import * as envProd from "../../../environments/environment.prod";

export class ServerUtil {

  private host = environment.webService.url || envProd.environment.webService.url ;
  private port = environment.webService.port || envProd.environment.webService.port;
  private secure = environment.webService.secure || envProd.environment.webService.secure;

  private static serverUtil: ServerUtil;
  private ts: TokenStorageService = new TokenStorageService();

  public static getInstance(): ServerUtil{
    if(ServerUtil.serverUtil == null){
      ServerUtil.serverUtil = new ServerUtil();
    }
    return ServerUtil.serverUtil;
  }

  public getServerUrl() {
    switch (this.secure) {
      case true:
        return `https://${this.host}:${this.port}`;
      case false:
        return `http://${this.host}:${this.port}`;
      default:
        return `http://${this.host}:${this.port}`;
    }
  }

  public createHeader(): HttpHeaders{
    return new HttpHeaders({'Authorization' : 'Bearer '+this.ts.getToken()});
  }

}
