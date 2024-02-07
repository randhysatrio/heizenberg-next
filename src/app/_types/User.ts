export type User = {
  fullName: string;
  email: string;
  username: string | null;
  picture: string | null;
  phoneNumber: string | null;
  createdAt: number;
  updatedAt: number;
  deletedAt: number | null;
  verifiedAt: number | null;
};
