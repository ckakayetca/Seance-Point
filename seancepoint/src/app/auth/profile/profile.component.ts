import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/types/user';
import { tap } from 'rxjs';
import { emptyUser } from 'src/app/shared/utils/emptyseance';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = emptyUser;
  hasSeances: boolean = false;
  hasAppointments: boolean = false;
  isLoading: boolean = true;

  constructor(private authSvc: AuthService) {
    this.authSvc.getProfile().subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    this.authSvc.getProfile().subscribe((user) => {
      console.log(user);
      this.user = user;
      if (user.seances.length > 0) {
        this.hasSeances = true;
      }
      if (user.appointments.length > 0) {
        this.hasAppointments = true;
      }

      this.isLoading = false;
    });
  }
}
