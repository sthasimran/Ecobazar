import React from "react";
import { useDispatch } from "react-redux";
import { radioFilter } from "../../features/slices/ProductSlice";
// import './Input.css';

const Input = () => {
  const category = [
    "Fresh Fruit",
    "Vegetable",
    // "Cooking",
    // "Snacks",
    // "Beverages",
    // "Beauty & Health",
    // "Bread & Bakery",
  ];
  const dispatch = useDispatch();

  return (
    <div className="mt-4 flex flex-col gap-2">
      {category.map((item, index) => {
        return (
          <label key={index}  className="custom-radio-label">
            <input
              name="category"
              type="radio"
              onChange={() => dispatch(radioFilter(item))}
              value={item}
            />
            <span className=" md:ml-2 text-[8px] md:text-xs lg:text-sm font-normal text-[#1A1A1A]">
              {item}
            </span>
            {/* <span className="text-gray-500 ml-2 text-sm font-normal">
              {quantity}
            </span> */}
          </label>
        );
      })}
    </div>
  );
};

export default Input;
