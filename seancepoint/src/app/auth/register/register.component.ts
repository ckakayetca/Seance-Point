import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { username, email, tel, password, rePassword } = form.value;

    this.authSvc
      .register(username, email, tel, password, rePassword)
      .subscribe((user) => {
        console.log(user);
        this.router.navigate(['/auth/login'])
      });
  }
}
