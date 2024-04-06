import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUrlsService } from '../core/http-urls.service';
import { Observable } from 'rxjs';
import { Show } from '../common/interface/Show';

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

  updateShow(id: number, show: Show): Observable<any> {
    return this.http.put(this.httpUrlsService.updateShow(id), show);
  }

  addShow(show: Show): Observable<any> {
    return this.http.post(this.httpUrlsService.addShow(), show);
  }

  getShowById(id: string): Observable<any> {
    return this.http.get(this.httpUrlsService.getShowById(id));
  }
}
