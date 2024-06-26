import React from "react";
import greenCapsicum from "../../assets/image/capsicum.png";
import mango from "../../assets/image/mango.png";
import redCapsicum from "../../assets/image/red-chilli.png";

const saleProducts = [
  {
    img: redCapsicum,
    title: "Red Capsicum",
    price: "$32.00",
    initial: "$40.99",
    rating: "5",
  },
  {
    img: mango,
    title: "Mango",
    price: "$24.00",
    initial: "$20.99",
    rating: "4",
  },
  {
    img: greenCapsicum,
    title: "Green Capsicum",
    price: "$32.00",
    initial: "$40.99",
    rating: "3",
  },
];
const SaleProducts = () => {
  return (
    <div className="pt-[20px]">
      <div>
        <h2 className="md:text-base lg:text-xl font-medium text-[#1A1A1A] mb-3">
          Sale Products
        </h2>
      </div>
      <div className="  flex flex-col gap-2">
        {saleProducts.map((item, index) => (
          <div
            key={index}
            className="flex items-center border rounded-md hover:border-primary hover:shadow-xl md:px-2 md:py-1"
          >
            <div>
              <img
                src={item.img}
                className="md:h-[85px] md:w-[100px] lg:h-[112px] lg:w-[112px]"
              />
            </div>
            <div>
              <p className=" md:text-xs lg:text-sm font-normal text-[#4D4D4D]">
                {item.title}
              </p>
              <div className="flex items-center gap-2 md:text-[12px] lg:text-[14px] leading-6">
                <p>{item.price}</p>
                <del className="text-[#999999]">{item.initial}</del>
              </div>
              <div className="flex items-center">
                <span className="text-[#FFA500] lg:text-[24px] md:text-[20px] ">
                  {"★".repeat(Math.round(item.rating))}
                </span>
                <span className="text-gray-400 lg:text-[24px] md:text-[20px]">
                  {"★".repeat(5 - Math.round(item.rating))}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaleProducts;
