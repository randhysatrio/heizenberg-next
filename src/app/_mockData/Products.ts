import { type Product, type ProductImage } from '../_types/Product';

import { MOCK_BRND_SONY } from './Brands';
import { MOCK_SCTG_PLAYSTATION } from './Subcategories';

export const MOCK_PRODUCT_IMAGES: ProductImage[] = [
  {
    id: 1,
    productId: 1,
    imageUrl:
      'https://images-cdn.ubuy.co.id/6352ae670f71a911a6279e96-playstation-5-games-bundle-disc-version.jpg',
  },
  {
    id: 2,
    productId: 1,
    imageUrl:
      'https://images-cdn.ubuy.co.id/6352ae670f71a911a6279e96-playstation-5-games-bundle-disc-version.jpg',
  },
];

export const MOCK_PDCT_PLAYSTATION: Product = {
  id: 1,
  name: 'Playstation 5',
  stock: 10,
  price: 7100000,
  description: 'This is a PS5... what do you expect??',
  brandId: 1,
  brand: MOCK_BRND_SONY,
  subcategoryId: 1,
  subcategory: MOCK_SCTG_PLAYSTATION,
  createdAt: 1707286188,
  updatedAt: 1707286188,
  deletedAt: null,
  images: MOCK_PRODUCT_IMAGES,
};
