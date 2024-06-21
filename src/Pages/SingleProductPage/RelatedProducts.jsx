import React from "react";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { data } from "../../Data/Data";

const RelatedProducts = () => {
  return (
    <div className="my-6 lg:mx-auto lg:px-28 md:px-10 px-3">
      <p className="font-medium text-[24px] lg:text-[32px] text-center">Related Products</p>
      <div className="m-auto grid md:grid-cols-3 lg:grid-cols-4 mt-4">
        {data.popularData
          .filter((item) => item.related === true)
          .map((item, index) => (
            <div
              key={index}
              className=" group/item flex flex-col items-center relative "
            >
              <div className=" border rounded-lg m-2 relative group hover:border-[#20B526] hover:shadow-md p-3">
                <img src={item.img} alt="" className="" />
                <div className="ml-2">
                  <p className="text-gray-500">{item.title}</p>
                  <div className="flex gap-2">
                    <p>{item.price}</p>
                    <p className="text line-through">{item.initial}</p>
                  </div>

                  {/* <p className="">{item.rating}</p> */}
                  <div className="flex items-center">
                    <span className="text-[#FFA500] text-[24px] ">
                      {"★".repeat(Math.round(item.rating))}
                    </span>
                    <span className="text-gray-400 text-[24px]">
                      {"★".repeat(5 - Math.round(item.rating))}
                    </span>
                  </div>
                </div>
                {item.sale ? (
                  <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                    Sale 50%
                  </span>
                ) : (
                  <></>
                )}

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
  );
};

export default RelatedProducts;
