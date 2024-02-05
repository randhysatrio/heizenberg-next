// LIBS
import { create } from "zustand";

// TYPE
import { User } from "../_types/User";

type AuthStore = {
  isLoggedIn: boolean;
  user: User | undefined;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  user: undefined,
  login: (user) => set((state) => ({ isLoggedIn: true, user })),
  logout: () => set(() => ({ isLoggedIn: false, user: undefined })),
}));
