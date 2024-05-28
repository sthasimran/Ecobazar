import { Button } from "flowbite-react";
import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import greenCapsicum from "../../assets/image/capsicum.png";
import redCapsicum from "../../assets/image/red-chilli.png";
import Breadcrumbs from "../../components/SidebarShop/Breadcrums";
import Coupon from "./Coupon";

const Cart = () => {
  return (
    <div>
      <Breadcrumbs />
      <section className="m-4 md:mx-auto md:px-28 px-3">
        <div>
          <p className="text-center text-[32px] leading-9 font-semibold">
            My Shopping Cart
          </p>
        </div>

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
                    <tr className="bg-white">
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <img
                            src={greenCapsicum}
                            alt="green"
                            className="w-[100px] h-[100px]"
                          />
                          <p className="text-[#1A1A1A] text-base font-normal">
                            Green Capsicum
                          </p>
                        </div>
                      </td>
                      <td className="p-3 text-[#1A1A1A] text-base font-normal whitespace-nowrap">
                        $14.00
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                          Counter
                        </span>
                      </td>
                      <td className="p-3 text-[#1A1A1A] text-base font-normal whitespace-nowrap">
                        $70.00
                      </td>
                      <td className="p-3">
                        <TiDeleteOutline size={25} color="#666666" />
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <img
                            src={redCapsicum}
                            alt="green"
                            className="w-[100px] h-[100px]"
                          />
                          <p className="text-[#1A1A1A] text-base font-normal">
                            Green Capsicum
                          </p>
                        </div>
                      </td>
                      <td className="p-3 text-[#1A1A1A] text-base font-normal whitespace-nowrap">
                        $14.00
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                          Counter
                        </span>
                      </td>
                      <td className="p-3 text-[#1A1A1A] text-base font-normal whitespace-nowrap">
                        $14.00
                      </td>
                      <td className="p-3">
                        <TiDeleteOutline size={25} color="#666666" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="md:hidden">
                  <div className="flex items-center justify-between mb-4">
                    <img src={greenCapsicum} alt="green" className="w-24 h-24"/>
                    <div>
                      <p className="text-[#1A1A1A] text-base font-normal">Green Capsicum</p>
                      <p className="text-[#1A1A1A] text-base font-normal">$14.00</p>
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                        Counter
                      </span>
                      <p className="text-[#1A1A1A] text-base font-normal">$70.00</p>
                    </div>
                    <TiDeleteOutline size={25} color="#666666" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <img src={redCapsicum} alt="red" className="w-24 h-24"/>
                    <div>
                      <p className="text-[#1A1A1A] text-base font-normal">Red Capsicum</p>
                      <p className="text-[#1A1A1A] text-base font-normal">$14.00</p>
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                        Counter
                      </span>
                      <p className="text-[#1A1A1A] text-base font-normal">$14.00</p>
                    </div>
                    <TiDeleteOutline size={25} color="#666666" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between my-3 p-2 border">
                <div className="bg-[#F2F2F2] p-3 rounded-full text-sm font-semibold text-[#4D4D4D] cursor-pointer mb-2 md:mb-0">
                  Return to shop
                </div>
                <div className="bg-[#F2F2F2] p-3 rounded-full text-sm font-semibold text-[#4D4D4D] cursor-pointer">
                  Update Cart
                </div>
              </div>
            </div>
            <Coupon />
          </div>

          <div className="col-span-1">
            <div className="border rounded-lg">
              <div className="container mx-auto p-4">
                <p className="text-[#1A1A1A] text-xl font-medium">Cart Total</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white ">
                    <tbody>
                      <tr>
                        <th className="px-4 py-2 border-b text-left text-[#4D4D4D] text-sm font-normal">
                          Subtotal:
                        </th>
                        <td className="px-4 py-2 border-b text-[#1A1A1A] text-sm font-semibold">
                          $84.00
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
                          $84.00
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
      </section>
    </div>
  );
};

export default Cart;
