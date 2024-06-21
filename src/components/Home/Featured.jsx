import React from "react";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";

function Featured() {
  return (
    <section className="lg:mx-auto lg:px-28 md:px-10 px-3 mt-3">
      <div className="flex items-center justify-between flex-col md:flex-row gap-4 md:gap-8 border shadow-md h-auto md:h-[100px] md:p-4  ">
        <div className="flex gap-3 text-left items-center p-4 md:p-0 md:border-none border-b">
          <div>
            <LiaShippingFastSolid size={40} color="green" />
          </div>
          <div className="text-xs">
            <div className="text-black">Free Shipping</div>
            <div className="text-slate-400">
              {" "}
              Free shipping on all your order
            </div>
          </div>
        </div>
        <div className="flex gap-3 text-left items-center p-4 md:p-0 md:border-none border-b">
          <div>
            <RiCustomerService2Line size={40} color="green" />
          </div>
          <div className="text-xs">
            <div className="text-black">Customer Support 24/7</div>
            <div className="text-slate-400">Instant access to support</div>
          </div>
        </div>

        <div className="flex gap-3 text-left items-center p-4 md:p-0 md:border-none border-b">
          <div>
            <TbShoppingBagCheck size={40} color="green" />
          </div>
          <div className="text-xs">
            <div className="text-black">100% Secure Payment </div>
            <div className="text-slate-400">We ensure your money is safe</div>
          </div>
        </div>

        <div className="flex gap-3 text-left items-center p-4 md:p-0">
          <div>
            <GiCardboardBoxClosed size={40} color="green" />
          </div>
          <div className="text-xs">
            <div className="text-black">Money-Back Guarantee</div>
            <div className="text-slate-400">30 Days Money-Back Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
