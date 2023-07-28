import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  isAuthenticating: boolean = true;

  constructor(private authSvc: AuthService) {}

  ngOnInit(): void {
    this.authSvc.getProfile().subscribe(() => {
      this.isAuthenticating = false;
    });
  }
}
