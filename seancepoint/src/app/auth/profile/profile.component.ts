import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/types/user';
import { tap } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user: User | undefined;

  constructor(private authSvc: AuthService) {}

  ngOnInit(): void {
      this.authSvc.getProfile().subscribe((user) => this.user = user)
  }

}
