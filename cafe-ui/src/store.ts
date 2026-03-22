import { atom } from 'jotai';
import type { MenuItem } from './data';

export interface CartItem extends MenuItem {
  cartItemId: string;
  quantity: number;
  customizations: {
    milk?: string;
    sugar?: string;
    temp?: string;
  };
}

export const cartAtom = atom<CartItem[]>([]);

export const cartTotalAtom = atom((get) => {
  const items = get(cartAtom);
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
});

export const cartCountAtom = atom((get) => {
  const items = get(cartAtom);
  return items.reduce((count, item) => count + item.quantity, 0);
});
