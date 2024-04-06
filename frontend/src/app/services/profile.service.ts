import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUrlsService } from '../core/http-urls.service';
import { CredentialsService } from './credentials.service';
import { Observable } from 'rxjs';
import { UserProfile } from '../common/interface/UserProfile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private http: HttpClient,
    private httpUrlsService: HttpUrlsService,
    private credService: CredentialsService
  ) {}

  updateProfile(userProfile: UserProfile): Observable<any> {
    return this.http.put(this.httpUrlsService.updateUserProfile(), userProfile);
  }

  getProfileByEmailAddress(emailAddress: string): Observable<any> {
    const params: HttpParams = new HttpParams().set(
      'emailAddress',
      emailAddress
    );

    return this.http.get(this.httpUrlsService.getUserProfile(), {
      params: params,
    });
  }
}
