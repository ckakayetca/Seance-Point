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
  hasSeances: boolean = false;

  constructor(private authSvc: AuthService) {
    this.authSvc.getProfile().subscribe((user) => this.user = user)
  }

  ngOnInit(): void {
      this.authSvc.getProfile().subscribe((user) => {
        console.log(user)
        this.user = user
        if(user.seances.length > 0) {
          this.hasSeances = true
        }
      })
  }

}
