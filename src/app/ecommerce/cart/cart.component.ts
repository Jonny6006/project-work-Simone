import { Component } from '@angular/core';
import { CartItem, Product } from '../service/ecommerce-models';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public cartService: CartServiceService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  // Funzione trackBy per migliorare le performance durante il rendering
  trackByProductId(index: number, item: CartItem) {
    return item.product.id;  // Usato per ottimizzare l'iterazione
  }
}
