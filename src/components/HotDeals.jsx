import { Rating } from "flowbite-react";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { data } from "../Data/Data";

function HotDeals() {
  return (
    <section className="mt-5 mb-2 md:mx-auto md:px-28 px-3">
      <div>
        <div className="flex justify-between">
          <div className="text-xl font-medium">Hot Deals</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>
        <div className="grid grid-cols-5 ">
          <div className="gridone row-span-2 col-span-2">
            {data.hotDealsOffer.map((item, index) => (
              <div key={index} className=" flex flex-col items-center  ">
                <div className=" border hover:border-[#20B526] hover:shadow-md ">
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
                </div>
              </div>
            ))}
          </div>
          <div className="realtive row-span-2 ">
          {data.hotDealsAll.map((item, index) => (
              <div key={index} className=" flex flex-col items-center  ">
                <div className=" border hover:border-[#20B526] hover:shadow-md ">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotDeals;
