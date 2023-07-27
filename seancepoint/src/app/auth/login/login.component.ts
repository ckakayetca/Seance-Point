import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  login(form: NgForm) {
    const {
      username,
      password
    } = form.value

    this.authSvc.login(username, password).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/seances'])
    })
  }
}
