import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ErrorService } from '../error/error.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  get isLoggedIn(): boolean {
    return this.authSvc.isLoggedIn;
  }
  constructor(private authSvc: AuthService, private router: Router, private errSvc: ErrorService) {}

  logout(): void {
    this.authSvc.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.errSvc.setError(err);
        this.router.navigate(['/error'])
      }
    })
  }
}
