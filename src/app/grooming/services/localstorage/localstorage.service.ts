import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  getItem(key: string): any {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  setItem(key: string, value: any): void {
    const valueToStore = JSON.stringify(value);
    return localStorage.setItem(key, valueToStore);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
