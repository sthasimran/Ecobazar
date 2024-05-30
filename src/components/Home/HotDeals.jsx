import React, { useEffect } from "react";
import { GoArrowRight, GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { data } from "../../Data/Data";
import { hotDealsProductFun } from "../../features/slices/ProductSlice";
import CountdownTimer from "../Home/CountdownTimer";
import Card from "../ShopComponent/Card";

function HotDeals() {
  const targetDate = new Date("2024-07-10T00:00:00");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hotDealsProductFun(true));
  }, [dispatch]);

  const products = useSelector((state) => state.products.hotDealsProductList);
  console.log(products)
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
            <div className="row-span-2 col-span-4 h-full ">
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
                      <p className="text line-through text-gray-500">{item.initial}</p>
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

          {products.map((item, index) => (
            <div className="col-span-2 h-full" >
               <Card
            id={item.id}
            img={item.img}
            title={ item.title}
            price={item.price}
            initial={item.initial}
            rating={item.rating}
            sale={item.sale}
            outOfStock={item.outOfStock}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HotDeals;
