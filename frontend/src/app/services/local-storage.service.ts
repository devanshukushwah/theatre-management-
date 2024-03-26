import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // // Get item from localStorage
  // getItem(key: string): any {
  //   if (key === null) return;
  //   return JSON.parse(localStorage.getItem(key));
  // }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Set item in localStorage
  setItem(key: string, value: any): void {
    if (key === null) return;
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Remove item from localStorage
  removeItem(key: string): void {
    if (key === null) return;
    localStorage.removeItem(key);
  }
}
