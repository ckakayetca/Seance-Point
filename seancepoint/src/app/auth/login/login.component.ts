import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ErrorService } from 'src/app/core/error/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userPassRegex: RegExp = /^\w+$/;

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private errSvc: ErrorService
  ) {}

  login(form: NgForm) {
    const { username, password } = form.value;

    this.authSvc.login(username, password).subscribe({
      next: (res) => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.errSvc.setError(error)
      },
    });
  }
}
