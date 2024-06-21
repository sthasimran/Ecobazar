import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { popularProductFun } from "../../features/slices/ProductSlice";
import Card from "../ShopComponent/Card";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popularProductFun(true));
  }, [dispatch]);

  const products = useSelector((state) => state.products.popularProductList);
  console.log(products)

  return (
    <section className="mt-5 mb-2 lg:mx-auto lg:px-28 md:px-10 px-3">
      <div className="">
        <div className="flex justify-between">
          <div className="text-xl font-medium">Popular Products</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>
        <div className="m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  mt-4">
          {products.map((item, index) => (
            <Card
            id={item.id}
            img={item.img}
            title={ item.title}
            price={item.price}
            initial={item.initial}
            rating={item.rating}
            sale={item.sale}
            outOfStock={item.outOfStock}
            />
            // <div
            //   key={index}
            //   className=" group/item flex flex-col items-center relative "
            // >
            //   <div className=" border relative group hover:border-[#20B526] hover:shadow-md p-3">
            //     <img src={item.img} alt="" className="" />
            //     <div className="ml-2">
            //       <p className="text-gray-500">{item.title}</p>
            //       <div className="flex gap-2">
            //         <p>{item.price}</p>
            //         <p className="text line-through">{item.initial}</p>
            //       </div>

            //       {/* <p className="">{item.rating}</p> */}
            //       <div className="flex items-center">
            //         <span className="text-[#FFA500] text-[24px] ">
            //           {"★".repeat(Math.round(item.rating))}
            //         </span>
            //         <span className="text-gray-400 text-[24px]">
            //           {"★".repeat(5 - Math.round(item.rating))}
            //         </span>
            //       </div>
            //     </div>
            //     {item.sale ? (
            //       <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
            //         Sale 50%
            //       </span>
            //     ) : (
            //       <></>
            //     )}

            //     <div className="  flex flex-col justify-between">
            //       <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
            //         <div className="group-hover/edit absolute right-2 top-2  w-8 h-8 rounded-full flex items-center justify-center  bg-slate-100 hover:bg-primary">
            //           <GoHeart className="" color="black" size={20} />
            //         </div>
            //         <div className="w-8 h-8 absolute right-2 top-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary">
            //           <IoEyeOutline className="" color="black" size={20} />
            //         </div>
            //       </div>
            //     </div>
            //     <div className="absolute right-2 bottom-6 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center  group-hover:bg-green-500 group-hover:text-white ">
            //       <HiOutlineShoppingBag className=" " />
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Products;
