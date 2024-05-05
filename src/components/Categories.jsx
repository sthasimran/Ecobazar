import React from "react";
import { GoArrowRight } from "react-icons/go";
import { data } from "../Data/Data";


function Categories() {
  return (
    <section className="md:mx-auto md:px-28 px-3 mt-3">
      <div className="">
        <div className="flex justify-between">
          <div className="text-xl font-medium">Popular Categories</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>
        <div className="m-auto grid grid-cols-6 gap-4 mt-4">
          {data.popularCategories.map((item, index) => (
            <div
              key={index}
              className=" border-2 flex flex-col items-center  hover:border-green-600 hover:shadow-md"
            >
              <img src={item.img} alt="" className="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



export default Categories;
