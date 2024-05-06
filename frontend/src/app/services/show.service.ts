import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUrlsService } from '../core/http-urls.service';
import { Observable } from 'rxjs';
import { Show } from '../common/interface/Show';
import { DateUtilsService } from '../common/utility/date-utils.service';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  constructor(
    private http: HttpClient,
    private httpUrlsService: HttpUrlsService,
    private dateUtil: DateUtilsService
  ) {}

  getAllShows(): Observable<any> {
    return this.http.get(this.httpUrlsService.getAllShow());
  }

  updateShow(id: number, show: Show): Observable<any> {
    const payloadShow = {
      ...show,
      startTime: this.dateUtil.dateInterceptor(show.startTime),
    };
    return this.http.put(this.httpUrlsService.updateShow(id), payloadShow);
  }

  addShow(show: Show): Observable<any> {
    const payloadShow = {
      ...show,
      startTime: this.dateUtil.dateInterceptor(show.startTime),
    };
    return this.http.post(this.httpUrlsService.addShow(), payloadShow);
  }

  getShowById(id: string): Observable<any> {
    return this.http.get(this.httpUrlsService.getShowById(id));
  }

  deleteShowById(id: number): Observable<any> {
    return this.http.delete(this.httpUrlsService.deleteShowById(id));
  }

  bookShowById(id: number): Observable<any> {
    return this.http.post(this.httpUrlsService.bookShowById(id), null);
  }

  getAllFilterShow(params: HttpParams): Observable<any> {
    return this.http.get(this.httpUrlsService.getAllFilterShow(), { params });
  }
}
