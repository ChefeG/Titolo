import { create } from "zustand";

interface GlobalState {
  language: "EN" | "RU" | "DE" | "FR";
  setLanguage: (language: "EN" | "RU" | "DE" | "FR") => void;
}

export const useHeaderStore = create<GlobalState>((set) => ({
    language: "EN",
    setLanguage: (lang) => set({ language: lang }),
}));
