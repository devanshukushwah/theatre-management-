import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUrlsService } from '../core/http-urls.service';
import { Movie } from '../common/interface/Movie';

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

  updateMovie(data: Movie): Observable<any> {
    return this.http.put(this.httpUrlsService.updateMovie(), data);
  }

  getAllMovies(): Observable<any> {
    return this.http.get(this.httpUrlsService.getAllMovie());
  }

  deleteMovieById(id: number): Observable<any> {
    const params: HttpParams = new HttpParams().set('id', id);
    return this.http.delete(this.httpUrlsService.deleteMovie(), { params });
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get(this.httpUrlsService.getMovieById(id));
  }

  getMoviesName(name: string): Observable<any> {
    const params: HttpParams = new HttpParams().set('name', name);
    return this.http.get(this.httpUrlsService.getMovieName(), { params });
  }
}
