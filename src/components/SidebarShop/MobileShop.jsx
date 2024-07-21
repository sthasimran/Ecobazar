import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { sortFilter } from "../../features/slices/ProductSlice";
import Input from "../ShopComponent/Input";
import ProductFilter from "./ProductFilter";

const MobileShop = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const products = useSelector((state) => state.products.filteredProducts);
  const dispatch = useDispatch();
  const list = [
    "LatestProducts",
    "Featured Products",
    "HotDeals Products",
    "Popular Products",
  ];

  return (
    <section className="mx-auto md:px-28 px-3 mt-3">
      <div className="flex justify-end my-3">
        <div className=" text-sm font-semibold ">
          {products.length} <span className=" font-light ml-1">Results Found</span>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="categoryButton">
          <button className="p-1 border rounded-md w-40 text-white text-[14px] leading-[21px] font-normal bg-primary">
            <div className="flex items-center justify-between">
              <p className="cursor-pointer">All Categories</p>
            </div>
          </button>
          <div className="bg-white">
            <Input />
          </div>
        </div>

        <div className="relative sortButton">
          <button
            className="flex items-center justify-between p-1 border rounded-md w-32 text-white text-[14px] leading-[21px] font-normal bg-primary"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <p> Sort by</p>
            {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          {dropdownOpen && (
            <ul className="absolute mt-1 w-48 border rounded-md bg-white shadow-lg z-10">
              {list.map((item, index) => (
                <li
                  key={index}
                  className="p-2 text-black text-[12px] leading-[21px] font-normal hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    dispatch(sortFilter(item));
                    setDropdownOpen(false);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="filteredItemList mt-4">
        <ProductFilter />
      </div>
    </section>
  );
};

export default MobileShop;
