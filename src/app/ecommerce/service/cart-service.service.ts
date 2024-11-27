import { Injectable, signal } from '@angular/core';
import { CartItem, Product } from './ecommerce-models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]); // Questo è l'Observable
  cartItems$ = this.cartItemsSubject.asObservable(); // Lo esponiamo come Observable

  constructor() { }

  // Metodo per ottenere gli item del carrello
  getCartItems() {
    return this.cartItemsSubject.value; // Restituiamo i dati correnti direttamente dal BehaviorSubject
  }

  // Aggiungi un prodotto al carrello
  addToCart(product: Product) {
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find(item => item.product.id === product.id);

    if (existingItem) {
      // Se il prodotto esiste già, aumentiamo la quantità
      const updatedItems = currentItems.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      this.cartItemsSubject.next(updatedItems); // Emettiamo il nuovo stato
    } else {
      // Se il prodotto non esiste, lo aggiungiamo con quantità 1
      const updatedItems = [...currentItems, { product, quantity: 1 }];
      this.cartItemsSubject.next(updatedItems); // Emettiamo il nuovo stato
    }
  }

  // Rimuovi un prodotto dal carrello
  removeFromCart(productId: number) {
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find(item => item.product.id === productId);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        // Se la quantità è maggiore di 1, riduciamo la quantità
        const updatedItems = currentItems.map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        this.cartItemsSubject.next(updatedItems); // Emettiamo il nuovo stato
      } else {
        // Se la quantità è 1, rimuoviamo il prodotto dal carrello
        const updatedItems = currentItems.filter(item => item.product.id !== productId);
        this.cartItemsSubject.next(updatedItems); // Emettiamo il nuovo stato
      }
    }
  }

  // Calcola il totale del carrello
  getTotal() {
    return this.cartItemsSubject.value.reduce(
      (total, item) => total + (item.product.price * item.quantity),
      0
    );
  }

}
