import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";
const Breadcrumbs = () => {
  return (
    <div>
      <div>
        <div className="lg:mx-auto lg:px-28 md:px-10 px-3  h-[100px]   bg-[url('./assets/image/bg-sign.jpg')] bg-cover flex items-center justify-start">
          <div>
            <GoHome color="grey" size={25} />
          </div>
          <div>
            <FaAngleRight color="grey" size={20} />
          </div>
          <a className="text-white">Categories</a>
          <div>
            <FaAngleRight color="grey" size={20} />
          </div>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "text-green-500" : "text-white"
            }
          >
            <a className="">Vegetable</a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
