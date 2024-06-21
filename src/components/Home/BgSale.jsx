import React from "react";
import vegeBg from "../../assets/image/vege-bg.jpg"; // Import the background image
import ShopNow from "../button/ShopNow";

function BgSale() {
  return (
    <section className="lg:mx-auto lg:px-28 md:px-10 px-3 mt-8">
      <div className="h-[358px] md:h-[358px] bg-cover bg-center rounded-md relative" style={{ backgroundImage: `url(${vegeBg})` }}>
        <div className="absolute right-[10px] lg:right-[20px] top-[60px] md:top-[80px] w-[90%] md:w-[441px] h-[159px] md:h-[190px] gap-[12px] space-y-2">
          <p className="text-white font-medium text-base lg:text-xl leading-[16px] lg:leading-[24px]">SUMMER SALE</p>
          <div className="flex text-5xl lg:text-7xl gap-4">
            <p className="text-orange font-bold">37%</p>
            <p className="text-white">OFF</p>
          </div>
          <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base leading-normal">
            Free shipping on all orders, plus a 30-day money-back guarantee.
          </p>
          <ShopNow/>
        </div>
      </div>
    </section>
  );
}

export default BgSale;
