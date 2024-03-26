import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpUrlsService {
  baseUrl: string = 'http://localhost:5000';
  userMicroService: string = 'service-user';

  constructor() {}

  createUser(): string {
    return `${this.baseUrl}/${this.userMicroService}/rest/v1/auth/create-user`;
  }

  generateToken(): string {
    return `${this.baseUrl}/${this.userMicroService}/rest/v1/auth/generate-token`;
  }
}
