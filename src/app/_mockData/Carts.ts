import type { Cart } from '../_types/Cart';

import { MOCK_PDCT_PLAYSTATION } from './Products';

export const MOCK_CARTS: Cart[] = [
  {
    id: 1,
    productId: 1,
    userId: 1,
    product: MOCK_PDCT_PLAYSTATION,
    quantity: 1,
  },
];
