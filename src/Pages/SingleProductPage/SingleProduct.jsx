import React, { useState } from "react";
import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiSocialFacebook } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import brand from "../../assets/image/brand.png";
import Counter from "../../components/Counter";
import Breadcrumbs from "../../components/SidebarShop/Breadcrumbs";
import { addToCart } from "../../features/slices/CartSlice";
import Description from "./Description";
import RelatedProducts from "./RelatedProducts";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.singleProductFun);
  const product = products.find((product) => product.id === parseInt(id));
  const cartItem = useSelector((state) =>
    state.cart.cart.find((item) => item.id === parseInt(id))
  );

  const [counter, setCounter] = useState(cartItem ? cartItem.quantity : 1);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        img: product.img,
        title: product.title,
        price: product.price,
        quantity: counter,
        totalPrice: product.price * counter,
      })
    );
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
    <Breadcrumbs/>
    <section className="lg:mx-auto lg:px-28 md:px-10 px-3 mt-6">
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 md:col-span-6">
          <div className="w-full">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto mb-4 rounded-md"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="border-b pb-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-[#1A1A1A] lg:text-4xl text-2xl md:text-[30px] font-semibold">
                {product.title}
              </h2>
              <span className="bg-[#79e67d33] text-[#2C742F] lg:text-[14px] md:text-[13px] text-[12px] px-[8px] py-[4px] rounded-md">
                In Stock
              </span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <span className="text-[#FFA500] text-[24px]">
                    {"★".repeat(Math.round(product.rating))}
                  </span>
                  <span className="text-gray-400 text-[24px]">
                    {"★".repeat(5 - Math.round(product.rating))}
                  </span>
                </div>
                <span className="text-[#666666] md:text-sm text-xs font-normal">
                  {product.rating} Review
                </span>
              </div>
              <div className="text-[#666666]">.</div>
              <div className="text-[#333333] md:text-sm text-xs font-medium">
                <span className="mr-2">SKU:</span>
                <span className="text-[#666666] md:text-sm  text-xs first-line:font-normal">
                  2,51,594
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div>
                <del className="text-[#B3B3B3] text-xl font-normal mr-2">
                  {product.initial}
                </del>
                <span className="text-[#2C742F] md:text-2xl text-xl font-medium">
                  ${product.price}
                </span>
              </div>
              {product.sale && (
                <div className="text-[#EA4B48] bg-[#ee4a481a] p-2 md:text-sm text-xs font-medium rounded-full">
                  64% Off
                </div>
              )}
            </div>
          </div>
          <div className="border-b pb-4 mb-4">
            <div className="my-6">
              <div className="md:flex items-center justify-between mb-4 md:gap-6 flex-row">
                <div className="flex items-center lg:gap-2 md:gap-3 mb-2">
                  <span className="md:text-[14px] lg:text-[16px]">Brand:</span>
                  <img src={brand} alt="" className="w-[56px] h-[56px]" />
                </div>
                <div className="flex gap-2 items-center">
                  <p className="md:text-[14px] lg:text-[16px]">Share item:</p>
                  <div className="hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white">
                    <TiSocialFacebook size={25} />
                  </div>
                  <div className="hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white">
                    <FaTwitter size={20} />
                  </div>
                  <div className="hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white">
                    <FaPinterestP size={20} />
                  </div>
                  <div className="hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white">
                    <FaInstagram size={20} />
                  </div>
                </div>
              </div>
              <p className="text-[#808080] text-sm font-normal mt-2">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.
              </p>
            </div>
          </div>
          <div className="border-b pb-4 mb-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 my-5">
              <div className="flex items-center gap-10">
                <Counter
                  count={counter}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                />
                <div className="heartOne w-10 h-10 rounded-full flex items-center justify-center bg-[#20B5261A] hover:bg-primary text-[#2C742F] md:hidden">
                  <GoHeart size={20} />
                </div>
              </div>

              <div
                className="bg-[#00B207] rounded-full md:h-[45px] h-[45px] w-full text-white flex items-center justify-center gap-3 hover:bg-[#2C742F] duration-150 text-[12px] md:text-[12px]"
                onClick={handleAddToCart}
              >
                <p>Add to Cart</p>
                <HiOutlineShoppingBag size={18} />
              </div>
              <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-[#20B5261A] hover:bg-primary text-[#2C742F] invisible md:visible ">
                <GoHeart size={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 my-4">
            <div className="text-[#1A1A1A] text-sm font-medium">
              Category:
              <span className="font-normal text-[#808080] ml-2">
                Vegetables
              </span>
            </div>
            <div className="text-[#1A1A1A] text-sm font-medium">
              Tag:
              <span className="font-normal text-[#808080] ml-2">
                Vegetables Healthy Chinese Cabbage Green Cabbage
              </span>
            </div>
          </div>
        </div>
      </div>
      <Description />
      <RelatedProducts />
    </section>
    </>
  );
};

export default SingleProduct;
