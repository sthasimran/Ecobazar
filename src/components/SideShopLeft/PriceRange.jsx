import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const PriceRange = () => {
  const [showPrice, setShowPrice] = useState(true);
  const handleClick = () => {
    setShowPrice(!showPrice);
  };

  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className=" border-b pb-4">
        <div
          className="flex items-center justify-between "
          onClick={handleClick}
        >
          <h2 className="text-xl font-medium text-[#1A1A1A] cursor-pointer mb-2">
            Price
          </h2>
          {showPrice ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {showPrice && (
          <div>
            <Box sx={{ width: 250 }}>
              <Slider
                getAriaLabel={() => "Price range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
            </Box>

            <label className="">
              <span className=" text-sm font-normal text-[#1A1A1A]">
                Price:
              </span>
              <span className="ml-2 text-sm font-semibold text-[#1A1A1A]">
                {value[0]}-{value[1]}
              </span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceRange;
