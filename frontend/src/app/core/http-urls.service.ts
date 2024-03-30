import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpUrlsService {
  baseUrl: string = 'http://localhost:5000';
  userMicroService: string = 'service-user';
  movieMicroService: string = 'service-movie';

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
    return `${this.baseUrl}/${this.movieMicroService}/rest/v1/movie/movie`;
  }

  getAllMovie(): string {
    return `${this.baseUrl}/${this.movieMicroService}/rest/v1/movie/movies`;
  }
}
