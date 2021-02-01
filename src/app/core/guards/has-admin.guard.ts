import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../web-services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HasAdminGuard implements CanActivate {

  private response = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let canStop = false;

    this.authService.adminExist().then(result => {
      // @ts-ignore
      if (result.result){
        this.router.navigateByUrl('/account/login');
        return true;
      }
      canStop = true;
    });

    do {

    }while (canStop);
    return true;
  }
}
