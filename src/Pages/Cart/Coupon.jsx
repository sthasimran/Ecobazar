import React from "react";

const Coupon = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between border rounded-lg p-2 mt-4">
      <p className="text-[#1A1A1A] text-[20px] font-medium mb-2 md:mb-0">
        Coupon Code
      </p>
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
        <input
          type="text"
          placeholder="Enter code"
          className="border rounded-3xl px-4 py-2 w-full md:w-[300px] mb-2 md:mb-0 md:mr-2"
        />
        <button className="bg-[#333333] border rounded-full px-6 py-2 text-[#FFFFFF] text-base font-semibold">
          Apply Coupon
        </button>
      </div>
    </div>
  );
};

export default Coupon;
