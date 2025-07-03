import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import the cart reducer

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;