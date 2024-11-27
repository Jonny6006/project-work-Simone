// models/product.model.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  }
  
  // models/cart-item.model.ts
  export interface CartItem {
    product: Product;
    quantity: number;
  }