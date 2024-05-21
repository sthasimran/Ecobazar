import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Input from "../ShopComponent/Input";

const Category = ({ handleChange }) => {
  const [showCategories, setShowCategories] = useState(true);
  const handleClick = () => {
    setShowCategories(!showCategories);
  };
  return (
    <div className=" border-b pb-4">
      <div className="flex items-center justify-between " onClick={handleClick}>
        <h2 className="text-xl font-medium text-[#1A1A1A] cursor-pointer">
          All Catagories
        </h2>
        {showCategories ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {showCategories && (
        <div className="mt-4 flex flex-col gap-2">
          {/* <label htmlFor="">
          <input
            type="radio"
            onChange={handleChange}
            value={value}
            name="test"
          />
          <span></span>all
        </label> */}

          <Input
            handleChange={handleChange}
            value="FreshFruit"
            title="Fresh Fruit"
            name="test"
            quantity="(25)"
          />
          <Input
            handleChange={handleChange}
            value="Vegetable"
            title="Vegetable"
            name="test"
            quantity="(15)"
          />
          <Input
            handleChange={handleChange}
            value="Cooking"
            title="Cooking"
            name="test"
            quantity="(54)"
          />
          <Input
            handleChange={handleChange}
            value="Snacks"
            title="Snacks"
            name="test"
            quantity="(47)"
          />
          <Input
            handleChange={handleChange}
            value="Beverages"
            title="Beverages"
            name="test"
            quantity="(43)"
          />

          <Input
            handleChange={handleChange}
            value="Beauty&Health"
            title="Beauty & Health"
            name="test"
            quantity="(38)"
          />
          <Input
            handleChange={handleChange}
            value="Bread&Bakery"
            title="Bread & Bakery"
            name="test"
            quantity="(15)"
          />
        </div>
      )}
    </div>
  );
};

export default Category;
