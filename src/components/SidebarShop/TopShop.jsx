import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { sortFilter } from "../../features/slices/ProductSlice";

const TopShop = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  // console.log(products);
  const dispatch = useDispatch();
  const list = [
    "LatestProducts",
    "Featured Products",
    "HotDeals Products",
    "Popular Products",
  ];
  return (
    <div>
      <div className=" md:flex justify-between lg:mx-auto lg:px-28 md:px-10 px-3 w-full items-center py-4">
        <div className="flex gap-16 w-full items-center ">
          <div className="w-1/4 ">
            <button className=" bg-[#00B207] lg:w-2/4 px-4 py-3 rounded-3xl text-white md:flex items-center gap-2 text-center hidden">
              {" "}
              Filter <LuSettings2 />
            </button>
          </div>
          <div>
            <label for="items" className="mr-3 text-[#808080] font-normal">
              Sort by:
            </label>
            <select
              className="p-1 border rounded-md w-48 text-[#4D4D4D] text-[14px] leading-[21px] font-normal"
              onChange={(event) => {
                dispatch(sortFilter(event.target.value));
              }}
            >
              {list.map((item, index) => {
                return (
                  <option
                    value={item}
                    className="bg-primary p-2 text-white hover:bg-[#2C742F] rounded-lg transition-all duration-300"
                  >
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="text-sm  w-1/4 text-end font-semibold ">
          {products.length} <span className=" font-light">Results Found</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default TopShop;
