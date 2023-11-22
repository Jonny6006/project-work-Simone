import { Injectable } from '@angular/core';
import { LocalstorageService } from '../localstorage/localstorage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly user: any = {
    id: 1,
    email: 'test@gmail.com',
    password: '123456',
    name: 'Test',
    surname: 'Surtest',
  };
  private readonly keyStore = 'USER';

  private readonly user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private readonly localstorage: LocalstorageService) {
    this.setDefaultuser();
  }

  login() {
    this.localstorage.setItem(this.keyStore, this.user);
    this.user$.next(this.user);
  }

  logout() {
    this.localstorage.removeItem(this.keyStore);
    this.user$.next(null);
  }

  register() {}

  me() {
    return this.user$.asObservable();
  }

  private setDefaultuser() {
    const user = this.localstorage.getItem(this.keyStore);
    if (user) {
      return this.user$.next(user);
    }
    return this.user$.next(null);
  }
}
