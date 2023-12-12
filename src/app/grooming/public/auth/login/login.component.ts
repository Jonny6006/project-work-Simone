import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/grooming/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  login() {
    this.authService.login();
    this.router.navigate(['/grooming/private']);
  }
}
