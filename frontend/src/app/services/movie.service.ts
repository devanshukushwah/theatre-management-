import { HttpClient, HttpParams } from '@angular/common/http';
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

  reformatMovie(movie: Movie): any {
    // actors is accepted as list in BE
    const sendData = {
      ...movie,
      actors: movie.actors?.split(','),
    };

    return sendData;
  }

  addMovie(data: Movie): Observable<any> {
    const sendData = this.reformatMovie(data);

    return this.http.post(this.httpUrlsService.addMovie(), sendData);
  }

  updateMovie(data: Movie): Observable<any> {
    const sendData = this.reformatMovie(data);

    return this.http.put(this.httpUrlsService.updateMovie(), sendData);
  }

  getAllMovies(): Observable<any> {
    return this.http.get(this.httpUrlsService.getAllMovie());
  }

  deleteMovieById(id: number): Observable<any> {
    const params: HttpParams = new HttpParams().set('id', id);
    return this.http.delete(this.httpUrlsService.deleteMovie(), { params });
  }
}
