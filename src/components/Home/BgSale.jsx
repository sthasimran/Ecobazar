import React from "react";
import { GoArrowRight } from "react-icons/go";
function BgSale() {
  return (
    <section className="md:mx-auto md:px-28 px-3 mt-8">
      <div className="h-[358px] md:bg-[url('./assets/image/vege-bg.jpg')] bg-cover rounded-md relative">
        <div className="absolute right-[10px] top-[60px] w-[441px] h-[159px] gap-[12px] space-y-2">
          <p className="text-white font-medium text-base leading-[16px]">SUMMER SALE</p>
          <div className="flex text-5xl gap-4">
            <p className="text-orange font-bold">37%</p>
            <p className="text-white">OFF</p>
          </div>
          <p className="text-[#FFFFFF] leading-normal">
            Free on all your order, Free Shipping and 30 days money-back
            guarantee
          </p>
          <div className="flex items-center justify-center gap-2  bg-primary text-white rounded-3xl h-12 w-40 mt-4">
            <button className="ml-4 font-medium">Shop now </button>
            <GoArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BgSale;
