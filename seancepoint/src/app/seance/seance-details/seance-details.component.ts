import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { Seance } from 'src/app/types/seance';
import { User } from 'src/app/types/user';
import { emptySeance, emptyUser } from '../../shared/utils/emptyseance';
import { NgForm } from '@angular/forms';
import { DateFilterFn } from '@angular/material/datepicker';
import { Review } from 'src/app/types/review';

@Component({
  selector: 'app-seance-details',
  templateUrl: './seance-details.component.html',
  styleUrls: ['./seance-details.component.css'],
})
export class SeanceDetailsComponent implements OnInit {
  currentSeance: Seance = emptySeance;
  isOwner: boolean = false;
  showReviewForm: boolean = false;
  tomorrow: Date = new Date();
  takenDatesList: string[] = [];
  hasAppointment: boolean = false;
  reviewsList: Review[] = [];
  noReviews: boolean = true;

  get isLoggedIn(): boolean {
    return this.authSvc.isLoggedIn;
  }

  get user(): User {
    if (!this.authSvc.user) {
      return emptyUser;
    }
    return this.authSvc.user;
  }

  // date filter for appointments
  dateFilter: DateFilterFn<Date | null> = (date: Date | null): boolean => {
    if (!date) {
      return true;
    }
    if (this.takenDatesList.includes(date!.toDateString())) {
      return false;
    }

    return true;
  };

  checkIfOwner = (r: Review, u: User): boolean => {
    if(r.postedBy._id == u._id) {
      return true;
    }
    return false;
  }

  // constructor
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private authSvc: AuthService,
    private errSvc: ErrorService
  ) {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
  }

  // on init
  ngOnInit(): void {
    const myId = this.user?._id;
    const seanceId = this.route.snapshot.params['id'];
    console.log(myId);

    // check if current user is owner
    if (myId === seanceId) {
      this.isOwner = true;
    }

    // get seance
    this.api.getOne(seanceId).subscribe({
      next: (s) => {
        this.currentSeance = s;
        if (myId === s.postedBy._id) {
          this.isOwner = true;
        }
        this.takenDatesList = s.appointments.map((s) =>
          new Date(s.date).toDateString()
        );

        // check if current user has an appointment
        const userIds = s.appointments.map((e) => e.userId);
        if (userIds.includes(myId)) {
          this.hasAppointment = true;
        }
      },
      error: (e) => this.errSvc.setError(e),
    });

    // get reviews
    this.api.getReviews(seanceId).subscribe({
      next: (r) => {
        console.log(r)
        this.reviewsList = r;
        if(r.length > 0) {
          this.noReviews = false;
        }
      },
      error: (e) => this.errSvc.setError(e)
    })
  }

  // delete seance
  deleteSeance() {
    this.api.deleteSeance(this.currentSeance._id).subscribe({
      next: (s) => {
        this.router.navigate(['/seances']);
      },
      error: (e) => {
        console.log(e);
        this.errSvc.setError(e);
      },
    });
  }

  // toggle review form
  toggleReview() {
    this.showReviewForm = !this.showReviewForm;
  }

  // create appointment
  appoint(form: NgForm) {
    const { date } = form.value;

    this.api.appoint(this.currentSeance._id, new Date(date)).subscribe({
      next: (a) => {
        console.log(a);
        this.router.navigate(['/auth/profile']);
      },
      error: (e) => {
        this.errSvc.setError(e);
      },
    });
  }

  // leave review
  leaveReview(form: NgForm) {
    const myId = this.user._id;
    const seanceId = this.currentSeance._id;
    const { rating, reviewText } = form.value;

    this.api.leaveReview(seanceId, {
      seance: seanceId,
      postedBy: myId,
      rating,
      text: reviewText
    }).subscribe({
      next: (s) => {
        console.log(s);
        location.reload();
      },
      error: (e) => {
        this.errSvc.setError(e);
      },
    });
  }
}
