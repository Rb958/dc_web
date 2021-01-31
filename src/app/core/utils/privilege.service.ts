import { Injectable } from '@angular/core';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {

  constructor(private tsService: TokenStorageService) { }

  isAdmin(): boolean{
    return this.hasAuthority(ERole.ADMIN);
  }

  isUser() : boolean {
    return this.hasAuthority(ERole.USER)
  }

  private hasAuthority(auth: ERole) {
    this.tsService.getAuthorities().forEach(role =>{
      if (role == 'ROLE_' + auth.toUpperCase()){
        return true;
      }
    });
    return false;
  }
}
