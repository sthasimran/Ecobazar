import React from "react";
import { GoArrowRight } from "react-icons/go";
import vegeBg from "../../assets/image/vege-bg.jpg"; // Import the background image

function BgSale() {
  return (
    <section className="md:mx-auto md:px-28 px-3 mt-8">
      <div className="h-[358px] md:h-[358px] bg-cover bg-center rounded-md relative" style={{ backgroundImage: `url(${vegeBg})` }}>
        <div className="absolute right-[10px] md:right-[20px] top-[60px] md:top-[80px] w-[90%] md:w-[441px] h-[159px] md:h-[190px] gap-[12px] space-y-2">
          <p className="text-white font-medium text-base md:text-xl leading-[16px] md:leading-[24px]">SUMMER SALE</p>
          <div className="flex text-5xl md:text-7xl gap-4">
            <p className="text-orange font-bold">37%</p>
            <p className="text-white">OFF</p>
          </div>
          <p className="text-[#FFFFFF] text-xs md:text-base leading-normal">
            Free shipping on all orders, plus a 30-day money-back guarantee.
          </p>
          <div className="flex items-center justify-center gap-2 bg-primary text-white rounded-3xl h-12 w-[90%]  md:h-12 md:w-[200px] mt-4">
            <button className="ml-4 font-medium">Shop now</button>
            <GoArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BgSale;
