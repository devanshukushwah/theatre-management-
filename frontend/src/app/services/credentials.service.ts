import { Injectable } from '@angular/core';
import { HttpUrlsService } from '../core/http-urls.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { UserDetails } from '../common.interface/UserDetails';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  constructor(
    private http: HttpClient,
    private httpUrlsService: HttpUrlsService,
    private localStorageService: LocalStorageService
  ) {}

  createUser(data: { email: string; password: string }): Observable<any> {
    const apiData = { emailAddress: data.email, password: data.password };
    return this.http.post(this.httpUrlsService.createUser(), apiData);
  }

  generateToken(data: { email: string; password: string }): Observable<any> {
    const apiData = { emailAddress: data.email, password: data.password };

    return this.http.post(this.httpUrlsService.generateToken(), apiData, {
      responseType: 'text',
    });
  }

  userIsValid(): boolean {
    const userDetails: UserDetails = this.getUserDetails();

    return userDetails?.token ? true : false;
  }

  getUserDetails(): UserDetails {
    return this.localStorageService.getItem('userDetails');
  }

  getAuthHeaders(): HttpHeaders {
    const userDetails: UserDetails = this.getUserDetails();

    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userDetails?.token || 'token-not-found'}`,
    });
  }
}
