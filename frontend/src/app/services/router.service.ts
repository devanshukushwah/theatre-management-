import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  navigateToShow(): void {
    this.router.navigate(['/show']);
  }

  navigateToLoginPage(): void {
    this.router.navigate(['/login']);
  }

  isLoginSignUpPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/signup';
  }
}
