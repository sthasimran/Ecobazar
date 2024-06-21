import React from "react";
import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ShopNow = () => {
  return (
    <>
      <NavLink to="/shop">
        <div className="flex items-center justify-center gap-2 bg-primary text-white rounded-3xl h-12 w-[80%] md:w-[150px]  lg:w-[200px] mt-4">
          <button className="ml-4 font-medium">Shop now</button>
          <GoArrowRight />
        </div>
      </NavLink>
    </>
  );
};

export default ShopNow;
