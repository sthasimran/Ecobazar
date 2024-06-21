import React from "react";
import { GoArrowRight } from "react-icons/go";
import { data } from "../../Data/Data";

function Categories() {
  return (
    <section className="lg:mx-auto lg:px-28 md:px-10 px-3 mt-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium">Popular Categories</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>
        <div className="m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
          {data.popularCategories.map((item, index) => (
            <div
              key={index}
              className="border flex flex-col items-center justify-center hover:border-green-600 hover:shadow-md py-4 "
            >
              <img src={item.img} alt="" className="mb-3  " />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
