import React from "react";
import { GoArrowRight, GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { data } from "../../Data/Data";
import CountdownTimer from "../Home/CountdownTimer";

function HotDeals() {
  const targetDate = new Date("2024-07-10T00:00:00");
  return (
    <section className="mt-5 mb-2 md:mx-auto md:px-28 px-3">
      <div>
        <div className="flex justify-between">
          <div className="text-xl font-medium">Hot Deals</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>

        <div className="grid grid-cols-10">
          {data.hotDealsOffer.map((item, index) => (
            <div className="row-span-2 col-span-4 ">
              <div
                key={index}
                className=" relative flex flex-col items-center  "
              >
                <div className=" border  hover:border-[#20B526] hover:shadow-md ">
                  <img src={item.img} alt="" className="" />
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center  bg-slate-200 hover:bg-primary">
                      <GoHeart className="" color="black" size={20} />
                    </div>
                    <div className="bg-[#00B207] rounded-full h-[45px] w-[275px] text-white flex items-center justify-center gap-3">
                      <p>Add to Cart</p>
                      <div>
                        <HiOutlineShoppingBag size={18} />
                      </div>
                    </div>
                    <div className="w-10 h-10  bg-slate-200 rounded-full flex items-center justify-center hover:bg-primary">
                      <IoEyeOutline className="" color="black" size={20} />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center leading-[27px]">
                    <p className="text-[#2C742F]">{item.title}</p>
                    <div className="flex gap-2">
                      <p>{item.price}</p>
                      <p className="text line-through">{item.initial}</p>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex items-center">
                        <span className="text-[#FFA500] text-[24px] ">
                          {"★".repeat(Math.round(item.rating))}
                        </span>
                        <span className="text-gray-400 text-[24px]">
                          {"★".repeat(5 - Math.round(item.rating))}
                        </span>
                      </div>
                      <p className="text-gray-500">(524 Feedback)</p>
                    </div>
                    <div className="text-gray-500 flex flex-col items-center">
                      <span className="">Hurry up! Offer ends in:</span>
                      <div className="">
                        <CountdownTimer
                          className="text-black bg-black"
                          color="black"
                          targetDate={targetDate}
                        />
                      </div>
                    </div>
                  </div>
                  {item.sale ? (
                    <div>
                      <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                        Sale 50%
                      </span>
                      <span className="absolute bg-[#48b7ea] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[110px]">
                        Best Sale
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ))}

          {data.hotDealsAll.map((item, index) => (
            <div className="col-span-2">
              <div
                key={index}
                className=" flex flex-col items-center relative  "
              >
                <div className=" border hover:border-[#20B526] hover:shadow-md p-2 ">
                  <img src={item.img} alt="" className="h-[200px] " />
                  <div className="ml-5">
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
                </div>
                <div className="absolute top-24 right-4 flex flex-col justify-between">
                  <div className="mt-28 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-slate-400">
                    <HiOutlineShoppingBag className="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HotDeals;
