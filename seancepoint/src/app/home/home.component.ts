import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get isLoggedIn(): boolean {
    return this.authSvc.isLoggedIn;
  }

  constructor(private authSvc: AuthService) {

  }
}
