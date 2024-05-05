import React from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import bag from "../assets/image/Bag.png";
import heart from "../assets/image/Heart.png";
import plant from "../assets/image/plant.jpg";

function Navbar() {
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Shop", path: "shop" },
    { link: "Pages", path: "pages" },
    { link: "Blog", path: "blog" },
    { link: "About Us", path: "about" },
    { link: "Contact Us", path: "contact" },
  ];
  return (
    <section className="">
      <div className="">
        <div className="border-b border-grey">
          <div className="flex justify-between mt-5 mb-2 md:mx-auto md:px-28 px-3">
            <div className="flex items-center gap-2">
              <CiLocationOn size={20} color="grey" />
              Store Location: Lincoln-344, Illinois, Chicago, USA
            </div>
            <div className="flex gap-7">
              <div className="flex  gap-2 border-r-2 border-grey ">
                <div className="flex items-center mr-3 gap-2 ">
                  ENG <FaAngleDown />
                  USD <FaAngleDown />
                </div>
              </div>
              <div>Sign In/ Sign Up</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-center mt-5 mb-2 md:mx-auto md:px-28 px-3">
          {/* logo */}
          <div className=" text-center">
            <a className="h-8 w-8 text-2xl font-semibold flex items-center space-x-3">
              <img src={plant} />
              <span>Ecobazar</span>
            </a>
          </div>
          {/* search */}
          <div className="md:flex hidden">
            <div
              className="flex py-[12px] pr-[18px] pl-[16px] w-[400px] h-[45px] border-solid border-2
            rounded-l-lg border-grey border-r-0"
            >
              <div className="flex items-center ">
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
            hover:bg-[#2C742F] duration-150 h-[45px]"
            >
              Search
            </button>
          </div>
          {/* like */}
          <div className="flex">
            <div className="flex items-center  ">
              <div className="h-8 w-8">
                <div className=" border-r-2 border-grey">
                  <div className="mr-2">
                    <img src={heart} />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-7 h-7 ml-2">
              <img src={bag} />
            </div>

            <div className="text-left">
              <div>Shopping cart</div>
              <div>$57.0</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-center mt-5 mb-2 md:mx-auto md:px-28 px-3 bg-black h-14">
          <div>
            <ul className="text-grey md:flex space-x-8 m-5">
              {navItems.map(({ link, path }) => (
                <a key={link} href={path} className="block hover:text-gray-500">
                  {link}
                </a>
              ))}
            </ul>
          </div>
          <div className="m-5 md:flex text-grey gap-2">
            <div>
              <LuPhoneCall size={20} />
            </div>
            <div>(219) 555-0114</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
