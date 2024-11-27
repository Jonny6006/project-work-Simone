import { NgModule } from '@angular/core';
import { EcommerceComponent } from './ecommerce.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [EcommerceComponent, ProductListComponent, CartComponent, NavbarComponent, HomeComponent],
  imports: [
    EcommerceRoutingModule,
    SharedModule,
    
  ]
})
export class EcommerceModule { }
