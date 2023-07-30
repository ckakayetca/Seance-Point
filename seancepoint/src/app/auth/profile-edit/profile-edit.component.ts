import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/core/error/error.service';
import { AuthService } from '../auth.service';
import { User } from 'src/app/types/user';
import { emptyUser } from 'src/app/shared/utils/emptyseance';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  emailRegex: RegExp = /^\w+@abv.bg$/;
  telRegex: RegExp = /^\+359\d{9}$/;
  userRegex: RegExp = /^\w+$/;

  get user(): User {
    if (!this.authSvc.user) {
      return emptyUser;
    }
    return this.authSvc.user;
  }

  constructor(private authSvc: AuthService, private router: Router, private errSvc: ErrorService) {

  }

  submit(form: NgForm) {
    if(form.invalid) {
      return
    }

    const {
      email,
      username,
      tel
    } = form.value

    this.authSvc.editProfile(email, username, tel).subscribe({
      next: (u) => {
        console.log(u)
        this.router.navigate(['/auth/profile'])
      },
      error: (e) => {
        this.errSvc.setError(e)
      }
    })
  }
}
