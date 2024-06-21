import React, { useState } from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuPhoneCall } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import plant from "../../assets/image/plant.jpg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "Pages", path: "/pages" },
    { link: "Blog", path: "/blog" },
    { link: "About Us", path: "/about" },
    { link: "Contact Us", path: "/contact" },
  ];

  return (
    <section className="">
      <div className="w-full">
        <div className="navMobile z-40 fixed top-0 h-16 right-0 left-0 flex items-center justify-between bg-white shadow-md p-3 lg:hidden md:hidden">
          <div className="text-center md:hidden">
            <a className="h-8 w-8 text-2xl font-semibold flex items-center space-x-3">
              <img src={plant} alt="Ecobazar Logo" />
              <NavLink to="/">
                <span>Ecobazar</span>
              </NavLink>
            </a>
          </div>
          <div className="cartMenu flex items-center gap-2">
            <div className="cartBag">
              <div className="relative w-7 h-7 ml-2 cursor-pointer">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? "text-green-500" : "text-black"
                  }
                >
                  <HiOutlineShoppingBag size={25} />
                </NavLink>
                {totalQuantity > 0 ? (
                  <div className="absolute top-[1px] right-[-5px] bg-primary w-[18px] h-[18px] rounded-full flex justify-center items-center text-[8px] text-white">
                    {totalQuantity}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="lg:hidden  flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
            <div
              className={`mobile-menu ${
                isMobileMenuOpen ? "mobile-menu-open" : ""
              } bg-[#333333] text-white absolute top-full left-0 right-0 transition-transform transform ${
                isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <ul className="flex flex-col items-center space-y-5 py-5">
                {navItems.map((value, index) => (
                  <li key={index}>
                    <NavLink
                      to={value.path}
                      className={({ isActive }) =>
                        isActive ? "text-green-500" : "text-white"
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {value.link}
                    </NavLink>
                  </li>
                ))}
                <div>
                  <ul className="flex items-center gap-2 lg:text-[#4D4D4D] text-white">
                    <NavLink
                      to="/signin"
                      className={({ isActive }) =>
                        isActive ? "text-primary" : "lg:text-[#4D4D4D]"
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <a className="md:text-sm lg:text-base">Sign In</a>
                    </NavLink>
                    <div>/</div>
                    <NavLink
                      to="/signup"
                      className={({ isActive }) =>
                        isActive ? "text-primary" : "lg:text-[#4D4D4D] text-white"
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <a className="md:text-sm lg:text-base text-">Sign Up</a>
                    </NavLink>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>

{/* other screen */}
        <div className="border-b border-grey hidden md:block lg:block store-div">
          <div className="flex  lg:flex-row justify-between mt-3 mb-2 lg:mx-auto lg:px-28 md:px-10 ">
            <div className="flex items-center gap-2 text-[#4D4D4D] mb-2 md:mb-0">
              <CiLocationOn size={20} color="grey" />
              <p className=" md:text-xs lg:text-base">
                Store Location: Lincoln-344, Illinois, Chicago, USA
              </p>
            </div>
            <div className="flex gap-7 items-center">
              <div className="md:hidden lg:flex gap-2 border-r-2 border-grey pr-2">
                <div className="flex items-center gap-2 text-[#4D4D4D]  lg:text-base">
                  ENG <FaAngleDown />
                  USD <FaAngleDown />
                </div>
              </div>
              <div>
                <ul className="flex items-center gap-2 text-[#4D4D4D]">
                  <NavLink
                    to="/signin"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "text-[#4D4D4D]"
                    }
                  >
                    <a className="md:text-sm lg:text-base">Sign In</a>
                  </NavLink>
                  <div>/</div>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "text-[#4D4D4D]"
                    }
                  >
                    <a className="md:text-sm lg:text-base text-">Sign Up</a>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between text-center mt-0 md:mt-4 mb-2 lg:mx-auto lg:px-28 md:px-10 ">
          {/* logo */}
          <div className="text-center hidden lg:block md:block">
            <a className="lg:h-8 lg:w-8 md:h-6 md:w-6 lg:text-2xl md:text-xl font-semibold flex items-center space-x-3">
              <img src={plant} alt="Ecobazar Logo" />
              <NavLink to="/">
                <span>Ecobazar</span>
              </NavLink>
            </a>
          </div>
          {/* search */}
          <div className="md:flex hidden">
            <div
              className="flex lg:py-[12px] lg:pr-[18px] lg:pl-[16px] md:pl-[10px] lg:w-[400px] lg:h-[45px] md:w-[200px] md:h-[40px] md:ml-24 border-solid border-2
            rounded-l-lg border-grey border-r-0"
            >
              <div className="flex items-center  ">
                <CiSearch size={20} color="black" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[350px] border-none outline-none  text-[15px] p-1 bg-transparent "
                />
              </div>
            </div>
            <button
              className="bg-primary rounded-r-lg border-primary text-white text-[14px] pt-2 pb-2 pl-5 pr-5
            hover:bg-[#2C742F] duration-150 lg:h-[45px] md:h-[40px]"
            >
              Search
            </button>
          </div>
          {/* like and bag icons */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex pr-2 border-r-2 border-grey">
              <GoHeart size={30} />
            </div>
            <div className="relative w-7 h-7 ml-2 cursor-pointer">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "text-green-500" : "text-black"
                }
              >
                <HiOutlineShoppingBag size={30} />
              </NavLink>
              {totalQuantity > 0 ? (
                <div className="absolute top-[1px] right-[-5px] bg-primary w-[18px] h-[18px] rounded-full flex justify-center items-center text-[8px] text-white">
                  {totalQuantity}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="text-left ml-2">
              <p className="text-[12px] leading-[13.2px] font-normal text-[#4D4D4D]">
                Shopping Cart
              </p>
              <p className="text-[14px] leading-[14px] font-medium">
                ${totalPrice}
              </p>
            </div>
          </div>
        </div>

        <div className="desktop-menu flex justify-between text-center lg:mt-5 md:mt-3 lg:mx-auto lg:px-28 md:px-10 px-3 bg-[#333333]">
          <ul className="text-grey md:flex items-center space-x-8  md:text-[14px] lg:text-[16px]">
            {navItems.map((value, index) => (
              <li key={index}>
                <NavLink
                  to={value.path}
                  className={({ isActive }) =>
                    isActive ? "text-green-500" : "text-white"
                  }
                >
                  {value.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="md:m-5 md:flex text-grey gap-2 md:text-[14px] lg:text-[16px]">
            <LuPhoneCall size={20} />
            <div>(219) 555-0114</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
