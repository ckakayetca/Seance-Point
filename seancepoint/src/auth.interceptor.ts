import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from './app/core/error/error.service';

const baseUrl = 'http://localhost:3000'


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private errSvc: ErrorService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: request.url.replace('/api', baseUrl),
        withCredentials: true,
      })
    }

    return next.handle(request).pipe(
      catchError((err) => {

        if(err.status === 401) {
          this.router.navigate(['/auth/login'])
        } else {
          this.errSvc.setError(err);
          this.router.navigate(['/error'])
        }

        return [err];
      })
    );
  }
}

export const AuthInterceptorProvider: Provider = {
  multi: true,
  useClass: AuthInterceptor,
  provide: HTTP_INTERCEPTORS
}
