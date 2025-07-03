import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart', 
    initialState: {
        items: [],
        totalItems: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
            state.totalItems += 1;
            state.totalPrice += item.price;
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find((i) => i.id === itemId);
            if (existingItem) {
                state.items = state.items.filter((i) => i.id !== itemId);
                state.totalItems -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
