import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import TagButton from "../ShopComponent/TagButton";
const PopularTag = () => {
  const [showTag, setShowTag] = useState(true);
  const handleClick1 = () => {
    setShowTag(!showTag);
  };

  
  return (
    <div className="border-b">
      <div
        className="flex items-center justify-between "
        onClick={handleClick1}
      >
        <h2 className="text-xl font-medium text-[#1A1A1A] cursor-pointer">
          Popular Tag
        </h2>
        {showTag ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {showTag && (
        <div className="mt-4 ">
          <div className="">
            <TagButton />

            {/* <TagButton
              tag="Healthy"
              handleClick={handleClick}
              value="Healthy"
            />
            <TagButton tag="Low Fat" handleClick={handleClick} value="LowFat" />
            <TagButton
              tag="Vegetarian"
              handleClick={handleClick}
              value="Vegetarian"
            />
            <TagButton
              tag="Kid Foods"
              handleClick={handleClick}
              value="KidFoods"
            />
            <TagButton
              tag="Vitamins"
              handleClick={handleClick}
              value="Vitamins"
            />
            <TagButton tag="Bread" handleClick={handleClick} value="Bread" />
            <TagButton tag="Meat" handleClick={handleClick} value="Meat" />
            <TagButton tag="Snacks" handleClick={handleClick} value="Snacks" />
            <TagButton tag="Tiffin" handleClick={handleClick} value="Tiffin" />
            <TagButton tag="Lunch" handleClick={handleClick} value="Lunch" />
            <TagButton tag="Dinner" handleClick={handleClick} value="Dinner" />
            <TagButton
              tag="Breakfast"
              handleClick={handleClick}
              value="Breakfast"
            />
            <TagButton tag="Fruit" handleClick={handleClick} value="Fruit" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularTag;
