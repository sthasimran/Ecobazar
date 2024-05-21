import React from "react";

import { default as ProductFilter } from "./ProductFilter";

import Category from "../SideShopLeft/Category";
import DiscountCard from "../SideShopLeft/DiscountCard";
import PopularTag from "../SideShopLeft/PopularTag";
import PriceRange from "../SideShopLeft/PriceRange";
import RatingFilter from "../SideShopLeft/RatingFilter";
import SaleProducts from "../SideShopLeft/SaleProducts";
const BottomShop = ({handleChange, handleClick, result}) => {
  // console.log(result)
  return (
    <div>
      <div className="w-full  container mx-auto px-28 flex mb-3">
        
        <div className=" w-1/4 mr-4">
          <Category handleChange={handleChange} />
          <PriceRange handleChange={handleChange} />
          <RatingFilter handleChange={handleChange} />
          <PopularTag handleClick={handleClick} />
          <DiscountCard />
          <SaleProducts />
        </div>
        <div className=" w-3/4 ">
          <ProductFilter result={result} />
        </div>
        
        
      </div>
    </div>
  );
};

export default BottomShop;
