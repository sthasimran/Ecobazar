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
          exist.quantity++;
          exist.totalPrice += productId.price;
          state.totalQuantity++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            quantity: 1,
            totalPrice: productId.price,
            title: productId.title,
            img: productId.img,
          });
          state.totalQuantity++;
          state.totalPrice += productId.price;
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
            (product) =>
              product.id !== productId.id 
             
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
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      try {
        const item = state.cart.find((product) => product.id === id);
        if (item) {
          // Calculate the difference in quantity
          const quantityDifference = quantity - item.quantity;
          
          // Update the item quantity
          item.quantity = quantity;
          
          // Update the item total price
          item.totalPrice = item.price * quantity;
          
          // Update the total quantity and total price
          state.totalQuantity += quantityDifference;
          state.totalPrice += quantityDifference * item.price;
        }
      } catch (error) {
        return error;
      }
    },
  },
});
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
