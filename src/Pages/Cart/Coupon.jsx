import React from "react";

const Coupon = () => {
  return (
    <div className="flex items-center justify-between border rounded-lg p-2 mt-4">
      <p className="text-[#1A1A1A] text-[20px] font-medium">Coupon Code</p>
      <div>
        <input
          type="text"
          placeholder="Enter code"
          className="border rounded-3xl px-[32px] py-[10px] w-[400px]"
        />
        <button className="bg-[#333333] border rounded-full px-[32px] py-[10px] text-[#FFFFFF] text-base font-semibold ml-[-40px]">
          Apply Coupon
        </button>
      </div>
    </div>
  );
};

export default Coupon;
