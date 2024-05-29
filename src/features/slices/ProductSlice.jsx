import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Data/db";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || data,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || data,
      singleProductsData:
      JSON.parse(sessionStorage.getItem("filteredData")) || data,
      singleProductFun:JSON.parse(sessionStorage.getItem("singleProduct"))
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
    singleProduct(state, action) {
      try {
        const oneProduct = data.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const savedState = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct", savedState);
        console.log("oneProduct", oneProduct);
      } catch (err) {
        return err;
      }
    },
    singleProductFun(state, action) {
      try {
        const singleProduct = data.filter(
          (product) => product.id === action.payload
        );
        state.singleProductsData = singleProduct;
        const saveState = JSON.stringify(singleProduct)
        sessionStorage.setItem("singleProduct", saveState);
        console.log("singleProduct", singleProduct);
      } catch (err) {
        return err;
      }

    }
  },
});

export const { filterProducts, sortFilter, radioFilter, singleProduct, singleProductFun } =
  productSlice.actions;
export default productSlice.reducer;
