import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap, catchError, of } from 'rxjs';
import { User } from '../types/user';
import { ErrorService } from '../core/error/error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  user$ = this.user$$.asObservable();
  user: User | undefined;
  myId: string = '';

  subscription: Subscription;

  constructor(private api: HttpClient, private errSvc: ErrorService) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  // register
  register(
    username: string,
    email: string,
    tel: string,
    password: string,
    rePassword: string
  ) {
    return this.api.post(`/api/users/register`, {
      username,
      email,
      tel,
      password,
      rePassword,
    })
  }

  // login
  login(username: string, password: string) {
    return this.api
      .post<User>(`/api/users/login`, {
        username,
        password,
      }).pipe(tap((user) => this.user$$.next(user)))
  }

  // get profile info (verify user)
  getProfile() {
    return this.api
      .get<User>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  // edit profiel info

  editProfile(email: string, username: string, tel: string) {
    return this.api.put(`/api/users/profile`, {
      email,
      username,
      tel
    })
  }

  // logout
  logout() {
    return this.api
      .get('/api/users/logout')
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
