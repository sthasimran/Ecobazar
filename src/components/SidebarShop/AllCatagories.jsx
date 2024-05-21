import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const AllCatagories = ({handleChange}) => {
  
  const category = [
    {
      name: "Fresh Fruits",
      category: "freshfruit",
      quantity: "25",
    },
    {
      name: "Vegetables",
      category: "vegetables",
      quantity: "25",
    },
    {
      name: "Cooking",
      category: "cooking",
      quantity: "54",
    },
    {
      name: "Snacks",
      category: "snacks",
      quantity: "47",
    },
    {
      name: "Beverages",
      category: "beverage",
      quantity: "43",
    },
    {
      name: "Beauty & Health",
      category: "beautyandhealth",
      quantity: "38",
    },
    {
      name: "Bread & bakery",
      category: "breadandbakery",
      quantity: "15",
    },
  ];

  const [showCategories, setShowCategories] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState(null);

  const handleClick = () => {
    setShowCategories(!showCategories);
  };

  const handleSelectedOption = (event) => {
    setSelectedCategories(event.target.value);
  };

  return (
    <div className=" border-b pb-4">
      <div className="flex items-center justify-between" onClick={handleClick}>
        <h2 className="text-xl font-medium text-[#1A1A1A] cursor-pointer">
          All Catagories
        </h2>
        {showCategories ? <FaAngleUp /> : <FaAngleDown/>}
      </div>
      {showCategories && (
        <div className="mt-4">
          {category.map((item, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="radio"
                id={item.category}
                name={category}
                value={item.category}
                checked={selectedCategories === item.category}
                onChange={handleSelectedOption}
                className="hidden"
              />
              <label
                htmlFor={item.category}
                className={`flex items-center cursor-pointer `}
              >
                <span
                  className={`w-4 h-4 mr-2 rounded-full border border-gray-400 flex items-center justify-center ${
                    selectedCategories === item.category ? "bg-green-500" : ""
                  }`}
                >
                  {selectedCategories === item.category && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </span>
                <span className="text-sm font-normal text-[#1A1A1A]"> {item.name}</span>

                <span className="text-gray-500 ml-2 text-sm font-normal">({item.quantity})</span>
              </label>
            </div>
          ))}
        </div>
      )}
      {/* {category.map((items, index) => (
        <div>
          {showCategories && (
            <div>
              <input
                type="radio"
                id={items.category}
                name={"cata"}
                value={items.category}
                className="mr-2 text-center "
              />
              <label for="html">{items.name} ({items.quantity})</label>
            </div>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default AllCatagories;
