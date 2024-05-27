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
      <div className=" flex justify-between container mx-auto px-28 w-full items-center py-4">
        <div className="flex gap-16 w-full items-center ">
          <div className="w-1/4 ">
            <button className=" bg-[#00B207] w-2/4 px-4 py-3 rounded-3xl text-white flex items-center gap-2 text-center">
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
              onChange={() => dispatch(sortFilter(list))}
            >
              <option className="text-sm font-normal" >{list}</option>
            </select>
          </div>
        </div>
        <div className="text-sm  w-1/4 text-end font-semibold">
          {products.length} <span className=" font-light">Results Found</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default TopShop;
