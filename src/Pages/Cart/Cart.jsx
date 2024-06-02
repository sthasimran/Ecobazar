import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Coupon from "../../Pages/Cart/Coupon";
import Counter from "../../components/Counter";
import Breadcrumbs from "../../components/SidebarShop/Breadcrums";
import { removeFromCart, updateCart } from "../../features/slices/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  // Local state to keep track of quantity changes
  const [localCart, setLocalCart] = useState(cart);

  // Sync local cart with redux cart
  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleIncrement = (index) => {
    const newCart = [...localCart];
    newCart[index] = {
      ...newCart[index],
      quantity: newCart[index].quantity + 1,
      totalPrice: newCart[index].price * (newCart[index].quantity + 1),
    };
    setLocalCart(newCart);
  };

  const handleDecrement = (index) => {
    const newCart = [...localCart];
    if (newCart[index].quantity > 1) {
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity - 1,
        totalPrice: newCart[index].price * (newCart[index].quantity - 1),
      };
      setLocalCart(newCart);
    }
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleUpdateCart = () => {
    dispatch(updateCart(localCart));
  };

  return (
    <div>
      <Breadcrumbs />

      <section className="m-4 md:mx-auto md:px-28 px-3">
        <div>
          <p className="text-center text-[32px] leading-9 font-semibold">
            My Shopping Cart
          </p>
        </div>
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
            <div className="col-span-2">
              <div>
                <div className="overflow-auto rounded-lg shadow">
                  <table className="w-full hidden md:table">
                    <thead className="border-b-2 border-gray-200">
                      <tr>
                        <th className="p-3 text-sm font-medium text-[#808080] tracking-wide text-left">
                          PRODUCT
                        </th>
                        <th className="w-24 p-3 text-sm font-medium text-[#808080] tracking-wide text-left">
                          PRICE
                        </th>
                        <th className="w-24 p-3 text-sm font-medium text-[#808080] tracking-wide text-left">
                          QUANTITY
                        </th>
                        <th className="w-32 p-3 text-sm font-medium text-[#808080] tracking-wide text-left">
                          SUBTOTAL
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-b">
                      {localCart.map((item, index) => {
                        const subTotal = item.price * item.quantity;
                        return (
                          <tr className="bg-white" key={index}>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <img
                                  src={item.img}
                                  alt="product"
                                  className="w-[100px] h-[100px]"
                                />
                                <p className="text-[#1A1A1A] text-base font-normal">
                                  {item.title}
                                </p>
                              </div>
                            </td>
                            <td className="p-3 text-[#1A1A1A] text-base font-normal whitespace-nowrap">
                              ${item.price}
                            </td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                              <Counter
                                count={item.quantity}
                                onIncrement={() => handleIncrement(index)}
                                onDecrement={() => handleDecrement(index)}
                              />
                            </td>
                            <td className="p-3 text-[#1A1A1A] text-base font-normal whitespace-nowrap">
                              ${subTotal}
                            </td>
                            <td className="p-3">
                              <TiDeleteOutline
                                size={25}
                                color="#666666"
                                onClick={() => handleRemoveFromCart(item)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between  p-2 border">
                  <NavLink to="/shop">
                    <div className="bg-[#F2F2F2] p-3 rounded-full text-sm font-semibold text-[#4D4D4D] cursor-pointer mb-2 md:mb-0">
                      Return to shop
                    </div>
                  </NavLink>
                  <div
                    className="bg-[#F2F2F2] p-3 rounded-full text-sm font-semibold text-[#4D4D4D] cursor-pointer"
                    onClick={handleUpdateCart}
                  >
                    Update Cart
                  </div>
                </div>
              </div>
              <Coupon />
            </div>

            <div className="col-span-1">
              <div className="border rounded-lg">
                <div className="container mx-auto p-4">
                  <p className="text-[#1A1A1A] text-xl font-medium">
                    Cart Total
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white ">
                      <tbody>
                        <tr>
                          <th className="px-4 py-2 border-b text-left text-[#4D4D4D] text-sm font-normal">
                            Subtotal:
                          </th>
                          <td className="px-4 py-2 border-b text-[#1A1A1A] text-sm font-semibold">
                            ${totalPrice}
                          </td>
                        </tr>
                        <tr>
                          <th className="px-4 py-2 border-b text-left text-[#4D4D4D] text-sm font-normal">
                            Shipping:
                          </th>
                          <td className="px-4 py-2 border-b text-[#1A1A1A] text-sm font-semibold">
                            Free
                          </td>
                        </tr>
                        <tr>
                          <th className="px-4 py-2 border-b text-left text-[#4D4D4D] text-sm font-normal">
                            Total:
                          </th>
                          <td className="px-4 py-2 border-b text-[#1A1A1A] text-sm font-semibold">
                            ${totalPrice}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="my-4">
                    <Button
                      type="submit"
                      className="w-full bg-primary rounded-full hover:bg-[#2C742F] duration-150"
                    >
                      Proceed to checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100 rounded-lg shadow-md">
            <svg
              className="w-16 h-16 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.2 6m-1.8-6h12.4M7 13L5.4 5M15 13l-1.2 6m-9.8-6H19"
              ></path>
            </svg>
            <p className="text-xl font-semibold text-gray-700 mb-2">
              Your cart is empty!
            </p>
            <p className="text-gray-500 mb-4">Add some items to get started.</p>
            <NavLink to="/shop">
              <button className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-green-600 transition duration-300">
                Shop Now
              </button>
            </NavLink>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
