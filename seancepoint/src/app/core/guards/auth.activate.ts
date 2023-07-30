import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthActivate {
  constructor(private authSvc: AuthService) {}
}

export const authGuardFn: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const router: Router = inject(Router);
  const authSvc: AuthService = inject(AuthService);
  const isLoggedIn = authSvc.getProfile().pipe(
    tap((user) => {
      if (user._id) {
        return true;
      }
      return false;
    })
  );

  if (isLoggedIn) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
