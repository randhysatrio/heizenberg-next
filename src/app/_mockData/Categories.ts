import type { Category } from '../_types/Category';

import {
  MOCK_SCTG_GA,
  MOCK_SCTG_PLAYSTATION,
  MOCK_SCTG_XBOX,
} from './Subcategories';

export const MOCK_CTG_ELECTRONIC: Category = {
  id: 1,
  name: 'Electronic',
  subcategory: [
    { id: 2, categoryId: 1, name: 'Camera' },
    { id: 3, categoryId: 1, name: 'Headphone' },
    { id: 4, categoryId: 1, name: 'Television' },
    { id: 5, categoryId: 1, name: 'Speaker' },
    { id: 6, categoryId: 1, name: 'Wearable Technology' },
  ],
};
export const MOCK_CTG_COMPUTER: Category = {
  id: 7,
  name: 'Computer',
  subcategory: [
    { id: 8, categoryId: 2, name: 'Processor' },
    { id: 9, categoryId: 2, name: 'Motherboard' },
    { id: 10, categoryId: 2, name: 'Graphic Card' },
    { id: 11, categoryId: 2, name: 'Memory' },
    { id: 12, categoryId: 2, name: 'Storage' },
  ],
};
export const MOCK_CTG_GAMING: Category = {
  id: 13,
  name: 'Gaming',
  subcategory: [MOCK_SCTG_PLAYSTATION, MOCK_SCTG_XBOX, MOCK_SCTG_GA],
};

export const MOCK_CATEGORIES: Category[] = [
  MOCK_CTG_COMPUTER,
  MOCK_CTG_ELECTRONIC,
  MOCK_CTG_GAMING,
];
