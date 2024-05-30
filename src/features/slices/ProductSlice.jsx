import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Data/db";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || data,

    singleProductFun:
      JSON.parse(sessionStorage.getItem("singleProduct")) || data,

    popularProductList:
      JSON.parse(sessionStorage.getItem("popularProduct")) || data,

    featureProductList:
      JSON.parse(sessionStorage.getItem("featureProduct")) || data,

    hotDealsProductList:
      JSON.parse(sessionStorage.getItem("hotDealsProduct")) || data,
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
    // singleProduct(state, action) {
    //   try {
    //     const oneProduct = data.filter(
    //       (product) => product.id === action.payload
    //     );
    //     state.singleProduct = oneProduct;
    //     const savedState = JSON.stringify(oneProduct);
    //     sessionStorage.setItem("oneProduct", savedState);
    //     console.log("oneProduct", oneProduct);
    //   } catch (err) {
    //     return err;
    //   }
    // },
    singleProductFun(state, action) {
      try {
        const singleProduct = data.filter(
          (product) => product.id === action.payload
        );
        state.singleProductFun = singleProduct;
        const saveState = JSON.stringify(singleProduct);
        sessionStorage.setItem("singleProduct", saveState);
        console.log("singleProduct", singleProduct);
      } catch (err) {
        return err;
      }
    },
    popularProductFun(state, action) {
      try {
        const popularProduct = data.filter(
          (product) => product.popularProduct === action.payload
        );
        state.popularProductList = popularProduct;
        const saveState = JSON.stringify(popularProduct);
        sessionStorage.setItem("popularProduct", saveState);
        console.log(popularProduct);
      } catch (error) {
        return error;
      }
    },
    featureProductFun(state, action) {
      try {
        const featureProduct = data.filter(
          (product) => product.featureProduct === action.payload
        );
        state.featureProductList = featureProduct;
        const saveState = JSON.stringify(featureProduct);
        sessionStorage.setItem("featureProduct", saveState);
        console.log(featureProduct);
      } catch (error) {
        return error;
      }
    },
    hotDealsProductFun(state, action) {
      try {
        const hotDealsProduct = data.filter(
          (product) => product.hotDealsProduct === action.payload
        );
        state.hotDealsProductList = hotDealsProduct;
        const saveState = JSON.stringify(hotDealsProduct);
        sessionStorage.setItem("hotDealsProduct", saveState);
        console.log(hotDealsProduct);
      } catch (error) {
        return error;
      }
    },
  },
});

export const {
  filterProducts,
  sortFilter,
  radioFilter,
  singleProduct,
  singleProductFun,
  popularProductFun,
  featureProductFun,
  hotDealsProductFun,
} = productSlice.actions;
export default productSlice.reducer;
