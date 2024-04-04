import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUrlsService } from '../core/http-urls.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  constructor(
    private http: HttpClient,
    private httpUrlsService: HttpUrlsService
  ) {}

  getAllShows(): Observable<any> {
    return this.http.get(this.httpUrlsService.getAllShow());
  }
}
