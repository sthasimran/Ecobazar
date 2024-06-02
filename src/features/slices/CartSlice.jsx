import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find((product) => product.id === productId.id);
        if (exist) {
          exist.quantity += productId.quantity;
          exist.totalPrice += productId.price * productId.quantity;
          state.totalQuantity += productId.quantity;
          state.totalPrice += productId.price * productId.quantity;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            quantity: productId.quantity,
            totalPrice: productId.price * productId.quantity,
            title: productId.title,
            img: productId.img,
          });
          state.totalQuantity += productId.quantity;
          state.totalPrice += productId.price * productId.quantity;
        }
      } catch (error) {
        return error;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find((product) => product.id === productId.id);

        if (exist.quantity === 1) {
          state.cart = state.cart.filter(
            (product) => product.id !== productId.id
          );
          state.totalQuantity--;
          state.totalPrice -= productId.price;
        } else {
          exist.quantity--;
          exist.totalPrice -= productId.price;
          state.totalQuantity--;
          state.totalPrice -= productId.price;
        }
      } catch (error) {
        return error;
      }
    },
    updateCart(state, action) {
      const updatedCart = action.payload;
      state.cart = updatedCart;
      state.totalQuantity = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
