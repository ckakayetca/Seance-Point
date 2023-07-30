import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorService } from './error.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnDestroy {
  apiError$ = this.errSvc.apiError$$.asObservable();
  errMsg: string = '';

  subscription: Subscription;
  constructor(private errSvc: ErrorService) {
    this.subscription = this.apiError$.subscribe((err: any) => {
      this.errMsg = err.message;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
