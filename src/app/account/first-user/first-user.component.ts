import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotifierService} from "../../core/utils/notifier/notifier.service";
import {NotificationType} from "../../core/utils/notifier/notification-type";
import {UserService} from "../../core/web-services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first-user',
  templateUrl: './first-user.component.html',
  styleUrls: ['./first-user.component.scss']
})
export class FirstUserComponent implements OnInit {
  registerForm: FormGroup;

  TAG = "Creation de l'administrateur";

  constructor(
    private fb: FormBuilder,
    private notifier: NotifierService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: [''],
      bornon: ['', Validators.required],
      cni: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  onSubmit(event: any){
    if(this.registerForm.valid){
      let utilisateur = this.registerForm.value;
      utilisateur.roles = ['ROLE_ADMIN'];

      if (this.registerForm.value.password != this.registerForm.value.confirmpassword){
        this.notifier.notify(
          "Les mot de passes ne sont pas egaux",
          this.TAG,
          NotificationType.WARNING
        );
      }else{
        this.userService.create(utilisateur).subscribe(
          response => {
            this.notifier.notify(
              "Administrateur cree avec succes",
              this.TAG,
              NotificationType.SUCCESS
            );
            this.router.navigateByUrl('/account/login')
          },
          error => {
            this.notifier.notify(
              "Erreur Lors de la creation de l'utilisateur",
              this.TAG,
              NotificationType.ERROR
            );
          }
        );
      }
    }else{
      this.notifier.notify(
        "Un des champs n'est pas valide",
        this.TAG,
        NotificationType.ERROR
      );
    }
  }

}
