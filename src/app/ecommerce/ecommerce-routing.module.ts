import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';

const ecommerceroutes: Routes = [
    {
        path: '',
        component: EcommerceComponent,
        children:[
            {
                path: 'product',
                component:ProductListComponent
              },
              {
                path: 'cart',
                component:CartComponent
              },
              {
                path: 'home',
                component: HomeComponent
              },
              {
                path: '',
                redirectTo: 'ecommerce',
                pathMatch: 'full',
              },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(ecommerceroutes)],
    exports: [RouterModule],
})
export class EcommerceRoutingModule {}
