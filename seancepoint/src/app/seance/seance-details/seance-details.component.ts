import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { Seance } from 'src/app/types/seance';
import { User } from 'src/app/types/user';
import { emptySeance } from '../../shared/utils/emptyseance';

@Component({
  selector: 'app-seance-details',
  templateUrl: './seance-details.component.html',
  styleUrls: ['./seance-details.component.css'],
})
export class SeanceDetailsComponent implements OnInit {
  currentSeance: Seance = emptySeance;
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
    private router: Router,
    private authSvc: AuthService,
    private errSvc: ErrorService
  ) {}

  ngOnInit(): void {
    const myId = this.user?._id;
    const seanceId = this.route.snapshot.params['id'];
    console.log(myId);

    if (myId === seanceId) {
      this.isOwner = true;
    }

    this.api.getOne(seanceId).subscribe({
      next: (s) => {
        this.currentSeance = s;
        if (myId === s.postedBy._id) {
          this.isOwner = true;
        }
        console.log(s);
      },
      error: (e) => this.errSvc.setError(e),
    });
  }

  deleteSeance() {
    this.api.deleteSeance(this.currentSeance._id).subscribe({
      next: (s) => {
        this.router.navigate(['/seances']);
      },
      error: (e) => {
        console.log(e)
        this.errSvc.setError(e);
      },
    });
  }

  toggleReview() {
    this.showReviewForm = !this.showReviewForm;
  }
}
