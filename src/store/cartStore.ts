import { create } from 'zustand';
import { CartStore, CartItem } from '../types';

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (newItem) => {
    set((state) => {
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          ),
        };
      }
      
      return {
        items: [...state.items, { ...newItem, quantity: newItem.quantity }],
      };
    });
  },
  
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== id),
    }));
  },
  
  updateQuantity: (id, quantity) => {
    set((state) => ({
      items: state.items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ),
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  get total() {
    const currentItems = get().items;
    return currentItems.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return sum + (price * quantity);
    }, 0);
  },
}));