import {Injectable} from '@angular/core';
import jwtDecode from "jwt-decode";


const TOKEN_KEY = 'authToken';
const USERNAME_KEY = 'authUsername';
const AUTHORITIES_KEY = 'authAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  saveToken(token: string){
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  logout(){
    sessionStorage.clear();
  }

  // saveUsername(username: string){
  //   sessionStorage.removeItem(USERNAME_KEY);
  //   sessionStorage.setItem(USERNAME_KEY, window.btoa(username));
  // }

  getUsername(): string{
    // @ts-ignore
    return jwtDecode(this.getToken()).email;
  }

  // saveAuthoritie(authorities: string){
  //   sessionStorage.removeItem(AUTHORITIES_KEY);
  //   sessionStorage.setItem(AUTHORITIES_KEY,window.btoa(authorities));
  // }

  getAuthorities(): Array<String>{
    // @ts-ignore
    return jwtDecode(this.getToken()).roles;
  }

  tokenExist() {
    return this.getToken() !== null && this.getToken() !== '';
  }

  tokenIsValid() {
    let elements = jwtDecode(this.getToken());
    // @ts-ignore
    return elements.exp > elements.iat;
  }
}
