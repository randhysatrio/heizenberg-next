export type ChildCategory = {
  id: number;
  parentId: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
  childCategory: ChildCategory[];
};
