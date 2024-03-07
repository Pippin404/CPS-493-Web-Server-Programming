//pure typstcrupt files
import products from '../data/products.json';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
//adding a question mark next to a property means its option. Ex     brand?: string;


export function getProducts(): Product[] {
    return products.Items;
  }