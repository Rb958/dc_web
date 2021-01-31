import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { FirstUserComponent } from './first-user/first-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [LoginComponent, RecoverAccountComponent, FirstUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
