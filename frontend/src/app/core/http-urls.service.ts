import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpUrlsService {
  baseUrl: string = 'http://localhost:5000';
  userMicroService: string = 'service-user';
  movieMicroService: string = 'service-movie';
  showMicroService: string = 'service-show';

  constructor() {}

  createUser(): string {
    return `${this.baseUrl}/${this.userMicroService}/api/v1/auth/create-user`;
  }

  generateToken(): string {
    return `${this.baseUrl}/${this.userMicroService}/api/v1/auth/generate-token`;
  }

  updateUserProfile(): string {
    return `${this.baseUrl}/${this.userMicroService}/rest/v1/user/user`;
  }

  getUserProfile(): string {
    return `${this.baseUrl}/${this.userMicroService}/rest/v1/user/user`;
  }

  addMovie(): string {
    return `${this.baseUrl}/${this.movieMicroService}/api/v1/movies`;
  }

  getAllMovie(): string {
    return `${this.baseUrl}/${this.movieMicroService}/api/v1/movies`;
  }

  updateMovie(): string {
    return `${this.baseUrl}/${this.movieMicroService}/api/v1/movies`;
  }

  getMovieById(id: number): string {
    return `${this.baseUrl}/${this.movieMicroService}/api/v1/movies/${id}`;
  }

  deleteMovie(): string {
    return `${this.baseUrl}/${this.movieMicroService}/api/v1/movies`;
  }

  getAllShow(): string {
    return `${this.baseUrl}/${this.showMicroService}/api/v1/shows`;
  }

  getShowById(id: string): string {
    return `${this.baseUrl}/${this.showMicroService}/api/v1/shows/${id}`;
  }

  addShow(): string {
    return `${this.baseUrl}/${this.showMicroService}/api/v1/shows`;
  }

  updateShow(id: number): string {
    return `${this.baseUrl}/${this.showMicroService}/api/v1/shows/${id}`;
  }

  deleteShowById(id: number): string {
    return `${this.baseUrl}/${this.showMicroService}/api/v1/shows/${id}`;
  }

  getMovieName() {
    return `${this.baseUrl}/${this.movieMicroService}/api/v1/movies/get-movies-name`;
  }

  bookShowById(id: number) {
    return `${this.baseUrl}/${this.showMicroService}/api/v1/shows/book/${id}`;
  }

  getAllFilterShow(): string {
    return `${this.baseUrl}/${this.showMicroService}/api/v1/shows/filters`;
  }
}
