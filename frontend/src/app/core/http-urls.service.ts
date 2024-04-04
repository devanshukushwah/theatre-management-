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
    return `${this.baseUrl}/${this.userMicroService}/rest/v1/auth/create-user`;
  }

  generateToken(): string {
    return `${this.baseUrl}/${this.userMicroService}/rest/v1/auth/generate-token`;
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
    return `${this.baseUrl}/${this.movieMicroService}/rest/v1/movie/movie`;
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

  updateShow(id: string): string {
    return `${this.baseUrl}/${this.showMicroService}/api/v1/shows/${id}`;
  }
}
