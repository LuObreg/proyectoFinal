import { Request, Response } from 'express';
import { Product, ProductList, EditProductRequest, EditProductResponse } from '../models/Product';

let products: Product[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  
  export const getAllProducts = (req: Request, res: Response) => {
    res.status(200).json(products);
  };
  /*
  export const updateProduct = (req: Request, res: Response) => {
    const { id }: { id: number } = req.params;
    const { name, price }: EditProductRequest = req.body;
  
    const productIndex = products.findIndex(product => product.id === Number(id));
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    const updatedProduct: Product = {
      id: products[productIndex].id,
      name: name || products[productIndex].name,
      price: price || products[productIndex].price,
    };
  
    products[productIndex] = updatedProduct;
  
    res.status(200).json(updatedProduct);
  };
  
  export const addProduct = (req: Request, res: Response) => {
    const { name, price }: ProductAdd = req.body;
  
    const newProduct: Product = {
      id: products.length + 1,
      name,
      price,
    };
  
    products.push(newProduct);
  
    res.status(201).json(newProduct);
  };
  
  export const deleteProduct = (req: Request, res: Response) => {
    const { id }: { id: number } = req.params;
  
    const productIndex = products.findIndex(product => product.id === Number(id));
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    const deletedProduct = products.splice(productIndex, 1)[0];
  
    res.status(200).json(deletedProduct);
  };
  */