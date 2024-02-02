// LIBS
import { create } from "zustand";

// TYPE
import { User } from "../_types/User";

type AuthStore = {
  isLoggedIn: boolean;
  user: User | undefined;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  user: undefined,
}));
