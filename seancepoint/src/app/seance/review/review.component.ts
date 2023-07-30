import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { emptySeance, emptyUser } from 'src/app/shared/utils/emptyseance';
import { Review } from 'src/app/types/review';
import { Seance } from 'src/app/types/seance';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  @Input() isOwner: boolean = false;
  @Input() seanceId: string = this.route.snapshot.params['id'];
  showReviewForm: boolean = false;
  reviewsList: Review[] = [];
  noReviews: boolean = true;
  editMode: boolean = false;
  userAlreadyReviewed: boolean = false;
  isLoading: boolean = true;

  get user(): User {
    if (!this.authSvc.user) {
      return emptyUser;
    }
    return this.authSvc.user;
  }

  get isLoggedIn(): boolean {
    return this.authSvc.isLoggedIn;
  }
  constructor(
    private authSvc: AuthService,
    private route: ActivatedRoute,
    private errSvc: ErrorService,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.seanceId = this.route.snapshot.params['id'];
    this.api.getReviews(this.seanceId).subscribe({
      next: (r) => {
        console.log(r);

        this.reviewsList = r;

        let userIds = r.map((review) => review.postedBy._id);

        if (userIds.includes(this.user._id)) {
          this.userAlreadyReviewed = true;
          console.log(`You have a review here`);
        }
        if (r.length > 0) {
          this.noReviews = false;
        }

        this.isLoading = false;
      },
      error: (e) => this.errSvc.setError(e),
    });
  }

  leaveReview(form: NgForm) {
    const myId = this.user._id;
    const { rating, reviewText } = form.value;

    this.api
      .leaveReview(this.seanceId, {
        seance: this.seanceId,
        postedBy: myId,
        rating,
        text: reviewText,
      })
      .subscribe({
        next: (s) => {
          console.log(s);
          location.reload();
        },
        error: (e) => {
          this.errSvc.setError(e);
        },
      });
  }

  toggleReview() {
    this.showReviewForm = !this.showReviewForm;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  editReview(form: NgForm) {
    const myId = this.user._id;
    const { rating, reviewText } = form.value;
    let reviewId = '';
    for (let r of this.reviewsList) {
      if (r.postedBy._id === myId) {
        reviewId = r._id;
        break;
      }
    }

    this.api
      .editReview(this.seanceId, reviewId, {
        seance: this.seanceId,
        postedBy: myId,
        rating,
        text: reviewText,
      })
      .subscribe({
        next: (s) => {
          console.log(s);
          location.reload();
        },
        error: (e) => {
          this.errSvc.setError(e);
        },
      });
  }

  deleteReview() {
    const myId = this.user._id;
    let reviewId = '';
    for (let r of this.reviewsList) {
      if (r.postedBy._id === myId) {
        reviewId = r._id;
        break;
      }
    }

    this.api.delReview(this.seanceId, reviewId).subscribe({
      next: () => {
        location.reload();
      },
      error: (e) => {
        this.errSvc.setError(e);
      },
    });
  }

  checkIfOwner = (r: Review, u: User): boolean => {
    if (r.postedBy._id == u._id) {
      return true;
    }
    return false;
  };
}
