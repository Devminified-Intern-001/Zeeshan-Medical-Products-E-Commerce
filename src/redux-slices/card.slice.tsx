import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  title: string;
  price: number;
  images: string[];
  defaultImage: string;
  quantity: number;
  description: string;
  unit: string;
  shortTitle: string;
}

export interface CartState {
  cart: CartItem[];
  getQuantity: number;
  totalPrice?: number;
  totalQuantity?: number;
}

const initialState: CartState = {
  cart: [],
  getQuantity: 0,
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        cart: CartItem;
        getQuantity: number;
      }>
    ) => {
      console.log('action.payload.cart', action.payload.cart);
      console.log('action.payload.getQuantity', action.payload.getQuantity);

      const find = state.cart.findIndex(
        (item) => item.title === action.payload.cart.title
      );
      console.log('find', find);

      if (find >= 0) {
        state.cart[find].quantity = action.payload.getQuantity;
        const actualQuanity = action.payload.getQuantity - state.getQuantity;
        state.getQuantity += actualQuanity;
      } else {
        action.payload.cart.quantity = action.payload.getQuantity;
        state.cart.push(action.payload.cart);
        state.getQuantity = action.payload.getQuantity;
      }
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.title !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ title: string; quantity: number }>
    ) => {
      const find = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );
      if (find >= 0) {
        state.cart[find].quantity = action.payload.quantity;
      }
    },
    getCartTotal: (state) => {
      const { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log('cartItem', cartItem);
          console.log('cartTotal', cartTotal);

          const { price, quantity } = cartItem;
          console.log('price', price);
          console.log('quantity', quantity);

          const itemTotal = price * quantity;
          console.log('itemTotal', itemTotal);

          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseFloat(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    increaseItemQuantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((item) => {
        if (item.title === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((item) => {
        if (item.title === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  updateQuantity,
  getCartTotal,
  increaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

// Selector example
import { RootState } from '../store/store';
export const selectCartItems = (state: RootState) => state.cart.cart;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.totalQuantity;
