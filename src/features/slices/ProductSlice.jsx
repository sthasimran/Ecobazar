import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Data/db";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || data,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = data.filter((product) => product.tag === action.payload);
        state.filteredProducts = filter;
        // console.log("filter", filter);
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (err) {
        return err;
      }
    },
    sortFilter(state, action) {
      try {
        const sortProdFil = data.filter(
          (product) => product.list === action.payload
        );
        state.filteredProducts = sortProdFil;
        // console.log("filter", sortProdFil);
        const saveState = JSON.stringify(sortProdFil);
        sessionStorage.setItem("filteredData", saveState);
      } catch (error) {
        return error;
      }
    },

    radioFilter(state, action) {
      try {
        const radioProdFil = data.filter(
          (product) => product.category === action.payload
        );
        state.filteredProducts = radioProdFil;
        // console.log("filter", sortProdFil);
        const saveState = JSON.stringify(radioProdFil);
        sessionStorage.setItem("filteredData", saveState);
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterProducts, sortFilter, radioFilter } = productSlice.actions;
export default productSlice.reducer;
