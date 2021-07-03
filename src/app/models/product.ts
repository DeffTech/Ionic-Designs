import { Category } from './category';

export class Product {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrls: string[];
  category: Category;
}
