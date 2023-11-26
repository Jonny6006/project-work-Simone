import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  isLogged: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }
  ngOnInit() {
    this.authService.me().subscribe((user) => {
      this.isLogged = !!user;
      this.items = [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink: '/grooming/public/home',
          visible: !this.isLogged,
        },
        {
          label: 'Prenotazioni',
          icon: 'pi pi-fw pi-calendar',
          routerLink: '/grooming/public/prenotazioni',
          visible: !this.isLogged,
        },
        {
          label: 'Login',
          icon: 'pi pi-fw pi-user',
          routerLink: '/grooming/public/auth/login',
          visible: !this.isLogged,
        },
        {
          label: 'Lista Prenotazioni',
          icon: 'pi pi-fw pi-calendar',
          routerLink: '/grooming/private/reservations',
          visible: this.isLogged,
        },
        {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off',
          visible: this.isLogged,
          command: () => {
            this.authService.logout();
            this.router.navigate(['grooming/public']);
          },
        },
      ];
    });
  }
}
