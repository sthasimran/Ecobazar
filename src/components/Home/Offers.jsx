import React from "react";
import { GoArrowRight } from "react-icons/go";
import CountdownTimer from "./CountdownTimer";

function Offers() {
  const targetDate = new Date("2024-05-24T00:00:00");
  return (
    <section className="container md:container:mx-auto md:px-28 px-3 mt-12">
      <div className="grid lg:grid-flow-row-dense lg:grid-cols-3 gap-10">
        <div className="gridone text-white text-center h-[536px] w-[365px] bg-[url('./assets/image/blue-bg.png')] bg-cover rounded-md ">
          <div className="leading-[46px]">
            <p className="mt-6">BEST DEALS</p>
            <p className="font-semibold text-3xl">Sale of the Month</p>
            <div className="container mx-auto">
             
              <CountdownTimer targetDate={targetDate}  />
            </div>
            <div className="flex justify-center">
              <div className="flex items-center justify-center gap-2  bg-white text-primary rounded-3xl h-12 w-40 mt-4">
                <button className="ml-4 font-medium">Shop now </button>
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="  text-white text-center h-[536px] w-[365px]  bg-[url('./assets/image/black-bg.png')] bg-cover rounded-md ml-4 mr-4">
          <div className="leading-[46px]">
            <p className="mt-6">85% FAT FREE</p>
            <p className="font-semibold text-3xl">Low-Fat Meat</p>
            <div className="flex items-center justify-center gap-2">
              <p>Started at</p>
              <p className="text-orange font-medium">$79.99</p>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center justify-center gap-2  bg-white text-primary rounded-3xl h-12 w-40 mt-4">
                <button className="ml-4 font-medium">Shop now </button>
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="  text-center h-[536px] w-[365px]  bg-[url('./assets/image/yellow-bg.png')] bg-cover rounded ml-8">
          <div className="leading-[46px]">
            <p className="mt-6">SUMMER SALE</p>
            <p className="font-semibold text-3xl">100% Fresh Fruit</p>
            <div className="flex space-x-2 text-black items-center  justify-center font-medium">
              <p>Up to</p>
              <p className=" bg-black h-[39px] w-[100px] rounded text-[#FCC900] items-center justify-center">
                64% OFF
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center justify-center gap-2  bg-white text-primary rounded-3xl h-12 w-40 mt-4">
                <button className="ml-4 font-medium">Shop now </button>
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
