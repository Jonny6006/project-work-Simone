import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: MenuItem[] | undefined;
  isLogged: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  ngOnInit() {
    this.authService.me().subscribe((user) => {
      this.isLogged = !!user;
      this.items = [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink: '/public/home',
          visible: !this.isLogged,
        },
        {
          label: 'Prenotazioni',
          icon: 'pi pi-fw pi-calendar',
          routerLink: '/public/prenotazioni',
          visible: !this.isLogged,
        },
        {
          label: 'Login',
          icon: 'pi pi-fw pi-user',
          routerLink: '/public/auth/login',
          visible: !this.isLogged,
        },
        {
          label: 'Lista Prenotazioni',
          icon: 'pi pi-fw pi-calendar',
          routerLink: '/private/reservations',
          visible: this.isLogged,
        },
        {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off',
          visible: this.isLogged,
          command: () => {
            this.authService.logout();
            this.router.navigate(['/public']);
          },
        },
      ];
    });
  }
}
