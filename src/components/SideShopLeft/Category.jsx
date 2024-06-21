import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Input from "../ShopComponent/Input";

const Category = () => {
  const [showCategories, setShowCategories] = useState(true);
  const handleClick = () => {
    setShowCategories(!showCategories);
  };
  return (
    <div className=" border-b pb-4">
      <div className="flex items-center justify-between " onClick={handleClick}>
        <h2 className=" md:text-base lg:text-xl font-medium text-[#1A1A1A] cursor-pointer">
          All Catagories
        </h2>
        {showCategories ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {showCategories && (
        <div >
         <Input/>

          {/* <Input
            value="FreshFruit"
            title="Fresh Fruit"
            name="test"
            quantity="(25)"
          />
          <Input
            value="Vegetable"
            title="Vegetable"
            name="test"
            quantity="(15)"
          />
          <Input value="Cooking" title="Cooking" name="test" quantity="(54)" />
          <Input value="Snacks" title="Snacks" name="test" quantity="(47)" />
          <Input
            value="Beverages"
            title="Beverages"
            name="test"
            quantity="(43)"
          />

          <Input
            value="Beauty&Health"
            title="Beauty & Health"
            name="test"
            quantity="(38)"
          />
          <Input
            value="Bread&Bakery"
            title="Bread & Bakery"
            name="test"
            quantity="(15)"
          /> */}
        </div>
      )}
    </div>
  );
};

export default Category;
