import React from "react";
import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <section className="lg:mx-auto lg:px-28 md:px-10 px-3 mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="gridone flex items-center md:col-span-2  row-span-2 h-[400px] md:h-[600px] bg-[url('./assets/image/bannar.jpg')] bg-cover rounded-md">
          <div className="gap-5 p-8 md:p-10">
            <p className="text-2xl md:text-[48px] md:w-[580px] font-semibold text-white leading-[32px] md:leading-[57px]">
              Fresh & Healthy Organic Food
            </p>
            <div className="border-l-2 border-[#84D187] mt-4 md:mt-6 pl-2">
              <div className="flex space-x-2 text-[16px] md:text-[20px] text-white items-center">
                <p>Sale up to</p>
                <p className="font-medium bg-orange px-[12px] py-[4px] rounded">
                  30% OFF
                </p>
              </div>
              <p className="text-[12px] md:text-[14px] text-white opacity-[80%] mt-2">
                Free shipping on all your order.
              </p>
            </div>
            <NavLink to="/shop">
              <div className="flex items-center gap-2 bg-white text-primary py-2 px-4 rounded-3xl h-12 w-40 md:w-48 mt-4">
                <button className="ml-4">Shop now </button>
                <GoArrowRight />
              </div>
            </NavLink>
          </div>
        </div>
        <div className="relative lg:row-span-1 col-span-1 h-[200px] md:h-[288px] bg-[url('./assets/image/BgFruit.png')] bg-cover rounded-md">
          <div className="absolute top-4 left-4 md:top-[32px] md:left-[32px] gap-2 md:gap-5">
            <p className="text-[#1A1A1A] text-[12px] md:text-[14px]">SUMMER SALE</p>
            <p className="text-[24px] md:text-[32px] font-semibold">75% OFF</p>
            <p className="text-[#666666] text-[12px] md:text-[14px] mt-2">
              Only Fruit & Vegetable
            </p>
            <div className="flex gap-2 text-primary py-2 px-4">
              <button className="">Shop now </button>
              <GoArrowRight className="" size={20} />
            </div>
          </div>
        </div>
        <div className="lg:row-span-1 col-span-1 flex items-center justify-center h-[200px] md:h-[288px] bg-[url('./assets/image/BgGreen.png')] bg-cover rounded-md">
          <div className="flex flex-col items-center gap-2 text-white">
            <p className="text-[12px] md:text-[14px] text-center leading-3 mb-3">Best Deal</p>
            <p className="text-[24px] lg:text-[32px]  text-center leading-[30px] md:leading-[38px] font-bold w-[280px] lg:w-[343px] h-[76px]">
              Special Products Deal of the Month
            </p>
            <div className="flex place-content-center mt-2">
              <div className="flex items-center gap-2 text-primary py-2 px-4">
                <button className="ml-4">Shop now </button>
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
