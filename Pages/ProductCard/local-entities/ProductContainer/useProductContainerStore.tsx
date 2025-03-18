import { create } from 'zustand'

interface ProductContainerStore {
    countrySize: 'CM' | 'EU' | 'UK' | 'US MEN'
    setCountrySize: (countrySize: 'CM' | 'EU' | 'UK' | 'US MEN') => void
    
}

export const useProductContainerStore = create<ProductContainerStore>((set) => ({
    countrySize: 'EU',
    setCountrySize: (countrySize) => set({ countrySize })
}));
