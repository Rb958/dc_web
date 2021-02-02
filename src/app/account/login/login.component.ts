import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../core/web-services/authentication.service";
import {NotifierService} from "../../core/utils/notifier/notifier.service";
import {NotificationType} from "../../core/utils/notifier/notification-type";
import {TokenStorageService} from "../../core/utils/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  TAG = 'Authentication';
  hasAdmin: boolean = true;

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthenticationService,
    private notifier: NotifierService,
    private ts: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // @ts-ignore
    this.AuthService.adminExist().then(result => {this.hasAdmin = result.result;})
  }

  onSubmit(event) {
    if (this.loginForm.valid){
      this.AuthService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
        response => {
          this.notifier.notify("Successfully Authenticated",this.TAG,NotificationType.SUCCESS)
          this.ts.saveToken(response.token);
          this.router.navigateByUrl('/home');
        },
        error => {
          this.notifier.notify('Wrong password or e-mail', this.TAG ,NotificationType.ERROR)
        }
      );
    }else{
      this.notifier.notify("The form has an invalid field. Please Check your values", this.TAG, NotificationType.ERROR)
    }
  }

  onOpenRegister() {
    this.router.navigateByUrl('/account/first-user');
  }
}
