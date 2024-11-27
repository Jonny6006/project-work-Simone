import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { CartServiceService } from './service/cart-service.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent  {
  menuItems: MenuItem[] = [];

  constructor(public cartService: CartServiceService) {}

  // ngOnInit() {
  //   // Impostiamo i link di navigazione del menù
  //   this.menuItems = [
  //     { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/ecommerce' },
  //     { label: 'Prodotti', icon: 'pi pi-fw pi-th-large', routerLink: '/ecommerce/product' },
  //   ];
  // }
}
