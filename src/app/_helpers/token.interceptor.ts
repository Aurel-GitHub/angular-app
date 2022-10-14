import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.getToken()) {
      let requestClone = request.clone({
        headers: request.headers.set(
          'Authorization',
          'bearer ' + this.getToken()
        ),
      });
      return next.handle(requestClone).pipe(
        catchError(error => {
          if (error.status === 401) this.tokenExpiredRedirect();
          return throwError('Session expired');
        })
      );
    }
    return next.handle(request);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  tokenExpiredRedirect(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true,
};
