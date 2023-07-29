import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { Seance } from 'src/app/types/seance';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-seance-details',
  templateUrl: './seance-details.component.html',
  styleUrls: ['./seance-details.component.css'],
})
export class SeanceDetailsComponent implements OnInit {
  currentSeance: Seance | undefined;
  isOwner: boolean = false;
  showReviewForm: boolean = false;

  get isLoggedIn(): boolean {
    return this.authSvc.isLoggedIn;
  }

  get user(): User | undefined {
    return this.authSvc.user;
  }

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private authSvc: AuthService,
    private errSvc: ErrorService
  ) {}

  ngOnInit(): void {
    const myId = this.user?._id;
    const seanceId = this.route.snapshot.params['id'];
    console.log(myId);
    console.log(seanceId);

    if (myId === seanceId) {
      this.isOwner = true;
    }

    this.api.getOne(seanceId).subscribe({
      next: (s) => {
        this.currentSeance = s
        console.log(s)
      },
      error: (e) => this.errSvc.setError(e),
    });
  }

  toggleReview() {
    this.showReviewForm = !this.showReviewForm
  }
}
