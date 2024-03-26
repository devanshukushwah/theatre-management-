import { Injectable } from '@angular/core';
import { HttpUrlsService } from '../core/http-urls.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  constructor(
    private http: HttpClient,
    private httpUrlsService: HttpUrlsService
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
}
