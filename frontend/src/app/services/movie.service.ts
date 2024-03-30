import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUrlsService } from '../core/http-urls.service';
import { Movie } from '../common.interface/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(
    private http: HttpClient,
    private httpUrlsService: HttpUrlsService
  ) {}

  addMovie(data: Movie): Observable<any> {
    return this.http.post(this.httpUrlsService.addMovie(), data);
  }

  getAllMovies(): Observable<any> {
    return this.http.get(this.httpUrlsService.getAllMovie());
  }
}
