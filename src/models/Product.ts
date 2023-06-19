export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export interface ProductList {
    products: Product[];
  }
  
  export interface EditProductRequest {
    name?: string;
    price?: number;
  }
  
  export interface EditProductResponse {
    success: boolean;
    message: string;
  }
  