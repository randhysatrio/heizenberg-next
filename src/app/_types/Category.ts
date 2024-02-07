export type Category = {
  id: number;
  name: string;
  subcategory?: Subcategory[];
};

export type Subcategory = {
  id: number;
  name: string;
  categoryId: number;
  category?: Category;
};
