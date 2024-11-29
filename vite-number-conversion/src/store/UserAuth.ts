import { create } from "zustand";
import { user } from "../Types/Types";
import { persist } from "zustand/middleware";
type userAuth = {
  user: user|null;
  setUser: (newUser: user) => void;
};
const useUserLogin = create<userAuth>()(
  persist(
    (set) => ({
      user:null,
      setUser: (newUser) => set({ user: newUser }),
    }),
    { name: "user-storage", getStorage: () => localStorage }
  )
);

export default useUserLogin;
