import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { CredentialsService } from '../services/credentials.service';
import { RouterService } from '../services/router.service';

/**
 * Interceptor, it is used to add Authorization token for all http request.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private credService: CredentialsService,
    private routerService: RouterService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.credService.getUserToken();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // // Handle the error here
        // console.error('error occurred:', error);
        // //throw error as per requirement

        if (error.statusText === 'Unauthorized') {
          this.credService.logOff();
          this.routerService.navigateToLoginPage();
        }

        return throwError(error);
      })
    );
  }
}
