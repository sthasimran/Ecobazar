import React from "react";
const DropMenu = () => {
  const list = [
    "Latest Products",
    "Featured Products",
    "HotDeals Products",
    "Popular Products",
  ];
  return (
    <>
     {list.map((item, index) => {
      return (
        <option  value={item}   className="text-sm font-normal">
        {item}
      </option>
      )
    })}
    </>
   
   
  );
};

export default DropMenu;
