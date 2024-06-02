import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Data/db";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: data,
    filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || data,
    currentFilters: {
      tag: null,
      list: null,
      category: null,
    },
    singleProductFun: JSON.parse(sessionStorage.getItem("singleProduct")) || data,
    popularProductList: JSON.parse(sessionStorage.getItem("popularProduct")) || data,
    featureProductList: JSON.parse(sessionStorage.getItem("featureProduct")) || data,
    hotDealsProductList: JSON.parse(sessionStorage.getItem("hotDealsProduct")) || data,
  },
  reducers: {
    applyFilters(state) {
      let filtered = state.allProducts;
      const { tag, list, category } = state.currentFilters;
      
      if (tag) {
        filtered = filtered.filter((product) => product.tag === tag);
      }
      if (list) {
        filtered = filtered.filter((product) => product.list === list);
      }
      if (category) {
        filtered = filtered.filter((product) => product.category === category);
      }
      
      state.filteredProducts = filtered;
      sessionStorage.setItem("filteredData", JSON.stringify(filtered));
    },
    filterProducts(state, action) {
      state.currentFilters.tag = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    sortFilter(state, action) {
      state.currentFilters.list = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    radioFilter(state, action) {
      state.currentFilters.category = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },

    resetFilters(state) {
      state.currentFilters = { tag: null, list: null, category: null };
      state.filteredProducts = state.allProducts;
      sessionStorage.removeItem("filteredData");
    },

    singleProductFun(state, action) {
      try {
        const singleProduct = data.filter((product) => product.id === action.payload);
        state.singleProductFun = singleProduct;
        sessionStorage.setItem("singleProduct", JSON.stringify(singleProduct));
        console.log("singleProduct", singleProduct);
      } catch (err) {
        return err;
      }
    },
    popularProductFun(state, action) {
      try {
        const popularProduct = data.filter((product) => product.popularProduct === action.payload);
        state.popularProductList = popularProduct;
        sessionStorage.setItem("popularProduct", JSON.stringify(popularProduct));
        console.log(popularProduct);
      } catch (error) {
        return error;
      }
    },
    featureProductFun(state, action) {
      try {
        const featureProduct = data.filter((product) => product.featureProduct === action.payload);
        state.featureProductList = featureProduct;
        sessionStorage.setItem("featureProduct", JSON.stringify(featureProduct));
        console.log(featureProduct);
      } catch (error) {
        return error;
      }
    },
    hotDealsProductFun(state, action) {
      try {
        const hotDealsProduct = data.filter((product) => product.hotDealsProduct === action.payload);
        state.hotDealsProductList = hotDealsProduct;
        sessionStorage.setItem("hotDealsProduct", JSON.stringify(hotDealsProduct));
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
  resetFilters,
  singleProductFun,
  popularProductFun,
  featureProductFun,
  hotDealsProductFun,
} = productSlice.actions;
export default productSlice.reducer;
