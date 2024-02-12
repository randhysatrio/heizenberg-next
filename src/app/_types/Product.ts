import type { Brand } from './Brand';
import type { Subcategory } from './Category';

export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  brandId: number;
  brand?: Brand;
  subcategoryId: number;
  subcategory?: Subcategory;
  createdAt: number;
  updatedAt: number;
  deletedAt: number | null;
  images: ProductImage[];
};

export type ProductImage = {
  id: number;
  productId: number;
  imageUrl: string;
};
