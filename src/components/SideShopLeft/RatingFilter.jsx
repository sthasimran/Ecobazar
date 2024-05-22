import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const RatingFilter = ({ handleChange }) => {
  const [showRating, setShowRating] = useState(true);
  const handleClick = () => {
    setShowRating(!showRating);
  };
  return (
    <div className="border-b">
      <div className="flex items-center justify-between " onClick={handleClick}>
        <h2 className="text-xl font-medium text-[#1A1A1A] cursor-pointer">
          Rating
        </h2>
        {showRating ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {showRating && (
        <div className="">
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" className="radio-container" />
            <span className="flex">
              <AiFillStar color="orange" /> <AiFillStar color="orange" />{" "}
              <AiFillStar color="orange" /> <AiFillStar color="orange" />{" "}
              <AiFillStar color="orange" />
            </span>
            <span className="text-[#1A1A1A] ml-1 text-sm font-normal">5.0</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" name="rating" />
            <span className="flex">
              <AiFillStar color="orange" /> <AiFillStar color="orange" />{" "}
              <AiFillStar color="orange" /> <AiFillStar color="orange" />{" "}
              <AiFillStar color="grey" />
            </span>
            <span className="text-[#1A1A1A] ml-1 text-sm font-normal">
              4.0 & up
            </span>
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" name="rating" />
            <span className="flex">
              <AiFillStar color="orange" /> <AiFillStar color="orange" />{" "}
              <AiFillStar color="orange" /> <AiFillStar color="grey" />{" "}
              <AiFillStar color="grey" />{" "}
            </span>
            <span className="text-[#1A1A1A] ml-1 text-sm font-normal">
              3.0 & up
            </span>
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" name="rating" />
            <span className="flex">
              <AiFillStar color="orange" /> <AiFillStar color="orange" />{" "}
              <AiFillStar color="grey" /> <AiFillStar color="grey" />{" "}
              <AiFillStar color="grey" />{" "}
            </span>
            <span className="text-[#1A1A1A] ml-1 text-sm font-normal">
              2.0 & up
            </span>
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" name="rating" />
            <span className="flex">
              <AiFillStar color="orange" /> <AiFillStar color="grey" />{" "}
              <AiFillStar color="grey" /> <AiFillStar color="grey" />{" "}
              <AiFillStar color="grey" />{" "}
            </span>
            <span className="text-[#1A1A1A] ml-1 text-sm font-normal">
              1.0 & up
            </span>
          </label>
        </div>
      )}
    </div>
  );
};

export default RatingFilter;
