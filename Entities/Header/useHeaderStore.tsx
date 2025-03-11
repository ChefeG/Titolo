import { create } from "zustand";

interface GlobalState {
  language: string;
  setLanguage: (language: string) => void;
}

export const useHeaderStore = create<GlobalState>((set) => ({
    language: "EN",
    setLanguage: (lang) => set({ language: lang }),
}));
