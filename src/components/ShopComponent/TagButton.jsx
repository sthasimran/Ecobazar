import React from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../features/slices/ProductSlice";
const TagButton = () => {
  const tags = [
    "Healthy",
    "LowFat",
    "Vegetarian",
    "Meat",
    "Kid Foods",
    "Fruit",
    "Vitamins",
    "Bread",
    "Snacks",
    "Tiffin",
    "Lunch",
    "BreakFast",
   
  ];

  const dispatch = useDispatch();
  return (
    <section>
      <div className="flex items-center mb-2  flex-wrap gap-2 ">
        {tags.map((item, index) => {
          return (
            <button
              onClick={() => dispatch(filterProducts(item))}
              value={item}
              className=" bg-[#F2F2F2] rounded-3xl px-[16px] py-[6px] hover:bg-primary hover:text-white text-[8px] md:text-xs lg:text-sm font-normal"
            >
              {item}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default TagButton;
