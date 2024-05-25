import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const CartButton = () => {
    // const state = useSelector((state) => state.addItem)
  return (
    <>
        <NavLink to="/cart" className="">
        <div className="bg-[#00B207] rounded-full h-[45px] w-[350px] text-white flex items-center justify-center gap-3">
                <p>Add to Cart</p>
                <div>
                  <HiOutlineShoppingBag size={18} />
                </div>
              </div>
        </NavLink>
    </>
  )
}

export default CartButton
