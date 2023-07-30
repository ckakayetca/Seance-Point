import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({ providedIn: 'root' })

export class AuthActivate {
  constructor(private authSvc: AuthService) {}
}

export const authGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    const router: Router = inject(Router);
    const authSvc: AuthService = inject(AuthService);
    const isLoggedIn = authSvc.isLoggedIn;

    if(isLoggedIn) {
        return true;
    }

    router.navigate(['/auth/login']);
    return false;
}
