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

  logOff(): boolean {
    this.localStorageService.removeItem('userDetails');
    return true;
  }

  /** Method to get current User token
   *
   * @returns User Token
   */
  getUserToken(): string {
    return this.getUserDetails()?.token;
  }

  /** Method to get current User role
   *
   * @returns User Role
   */
  getUserRole(): string | null | undefined {
    const userDetails: UserDetails = this.getUserDetails();
    return userDetails?.userProfile?.role || null;
  }

  adminControl(): boolean {
    return this.getUserRole() === 'ADMIN';
  }
}
