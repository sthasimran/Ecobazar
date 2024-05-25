import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Data/db";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || data,
    singleProduct: JSON.parse(sessionStorage.getItem("singleProduct")) || data,
    error: false,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = data.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        state.error = false;
        const savedState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", savedState);
      } catch (err) {
        return err;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = state.filteredProducts.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const savedState = JSON.stringify(oneProduct);
        sessionStorage.setItem("singleProduct", savedState);
      } catch (err) {
        return err;
      }
    },
  },
});

export const {
  filterProducts,
  singleProduct,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} = productSlice.actions;
export default productSlice.reducer;
