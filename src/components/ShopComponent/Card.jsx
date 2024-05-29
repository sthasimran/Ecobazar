import React from "react";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { singleProductFun } from "../../features/slices/ProductSlice";

const Card = ({
  id,
  img,
  title,
  price,
  initial,
  sale,
  rating,
  outOfStock,
}) => {
  const dispatch = useDispatch();
  const { category } = useParams();

  return (
    <section className="card-container">
      <NavLink to={`/pages/` + id}>
        <div className="m-auto " onClick={() => dispatch(singleProductFun(id))}>
          <div className="group/item flex flex-col items-center relative">
            <div className="border rounded-md relative group hover:border-[#20B526] hover:shadow-md p-3">
              <img src={img} alt="" className="h-[200px] w-[300px]" />
              {sale && (
                <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                  Sale 50%
                </span>
              )}
              {outOfStock && (
                <span className="absolute bg-[#1A1A1A] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                  Out of Stock
                </span>
              )}
              <div className="ml-2">
                <p className="text-gray-500">{title}</p>
                <div className="flex gap-2">
                  <p>{price}</p>
                  <p className="text line-through text-gray-500">{initial}</p>
                </div>
                <div className="">
                  <div className="flex items-center">
                    <span className="text-[#FFA500] text-[24px]">
                      {"★".repeat(Math.round(rating))}
                    </span>
                    <span className="text-gray-400 text-[24px]">
                      {"★".repeat(5 - Math.round(rating))}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
                  <div className="group-hover/edit absolute right-2 top-2 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-primary">
                    <GoHeart color="black" size={20} />
                  </div>
                  <div className="w-8 h-8 absolute right-2 top-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary">
                    <IoEyeOutline color="black" size={20} />
                  </div>
                </div>
              </div>
              <div className="absolute right-2 bottom-6 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white">
                <HiOutlineShoppingBag />
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </section>
  );
};

export default Card;
