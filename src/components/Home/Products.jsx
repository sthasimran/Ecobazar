import { Rating } from "flowbite-react";
import React from "react";
import { GoArrowRight, GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { data } from "../../Data/Data";
function Products() {
  return (
    <section className="mt-5 mb-2 md:mx-auto md:px-28 px-3 ">
      <div className="">
        <div className="flex justify-between">
          <div className="text-xl font-medium">Popular Products</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>
        <div className="m-auto grid grid-cols-5 mt-4">
          {data.popularData.map((item, index) => (
            <div
              key={index}
              className=" group/item flex flex-col items-center relative "
            >
              <div className=" border relative group hover:border-[#20B526] hover:shadow-md ">
                <img src={item.img} alt="" className="" />
                <div className="ml-2">
                  <p className="text-gray-500">{item.title}</p>
                  <div className="flex gap-2">
                    <p>{item.price}</p>
                  <p className="text line-through">{item.initial}</p>
                  </div>
                  
                  {/* <p className="">{item.rating}</p> */}
                  <div className="">
                    <Rating className="">
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star filled={false} fontSize={20} />
                    </Rating>
                  </div>
                </div>
                {item.sale ? (
                <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                  Sale 50%
                </span>
              ) : (
                <></>
              )}
                {/* <div className=" absolute top-4 left-4 h-[27px] w-[80px] bg-red-600 rounded text-[14px] font-normal text-white items-center justify-center">
                  <p className=" p-1 ml-1">Sale 50%</p>
                </div> */}
              <div className="  flex flex-col justify-between">
                <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
                  <div className="group-hover/edit absolute right-2 top-2  w-8 h-8 rounded-full flex items-center justify-center  bg-slate-100 hover:bg-primary">
                    <GoHeart className="" color="black" size={20} />
                  </div>
                  <div className="w-8 h-8 absolute right-2 top-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary">
                    <IoEyeOutline className="" color="black" size={20} />
                  </div>
                </div>
                </div>
                <div className="absolute right-2 bottom-6 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center  group-hover:bg-green-500 group-hover:text-white ">
                  <HiOutlineShoppingBag className=" " />
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}


export default Products;
