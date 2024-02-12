import type { Product } from './Product';

export type Cart = {
  id: number;
  userId: number;
  productId: number;
  product: Product;
  quantity: number;
};
