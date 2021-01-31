import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RecoverAccountComponent} from "./recover-account/recover-account.component";
import {FirstUserComponent} from "./first-user/first-user.component";
import {HasAdminGuard} from "../core/guards/has-admin.guard";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recover',
    component: RecoverAccountComponent
  },
  {
    path: 'first-user',
    canActivate: [HasAdminGuard],
    component: FirstUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
