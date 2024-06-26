import React from "react";
import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import discover from "../../assets/image/Discover.png";
import mastercard from "../../assets/image/Mastercard.png";
import visa from "../../assets/image/Visa.png";
import ApplePay from "../../assets/image/applePay.png";
import logoBlack from "../../assets/image/logoBlack.png";
import Secure from "../../assets/image/secure.png";

function FooterBar() {
  return (
    <section className="">
     <div className="upperFooter  py-3 mt-3 bg-[#F7F7F7]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 md:gap-6 lg:mx-auto lg:px-28 md:px-10 px-8 ">
          <div className="flex flex-col  text-center md:text-left lg:p-2 ">
            <p className="font-semibold lg:text-[24px] lg:leading-9 md:text-lg">
              Subscribe to our Newsletter
            </p>
            <p className="font-normal text-[14px] leading-5 text-[#999999]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full max-w-lg md:max-w-none">
            <div className="flex flex-col md:flex-row md:w-[290px] lg:w-full">
              <div className="flex py-[12px] pr-[18px] pl-[16px] w-full lg:w-full md:w-[300px] h-[45px] border-solid border-2 rounded-md md:rounded-full  border-grey md:border-r-0">
                <div className="flex items-center w-full">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full border-none outline-none text-[15px] p-1 bg-transparent"
                  />
                </div>
              </div>
              <button className="bg-primary w-full md:w-auto rounded-md md:rounded-full border-primary text-white md:text-[14px] px-5 py-2 mt-2 md:mt-0 md:ml-[-60px] hover:bg-[#2C742F] duration-150 h-[45px]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-4 md:mt-0">
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
      </div>  


      <footer className="bg-[#1A1A1A] lg:mx-auto lg:px-28 md:px-10 px-8">
        <div className=" py-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:gap-10 gap-8 md:gap-18">
            <div className="flex flex-col gap-2 col-span-2 ">
              <div className="text-center md:text-left">
                <a className="h-8 w-8 text-[32px] leading-9 font-medium flex items-center space-x-3">
                  <img src={logoBlack} alt="Ecobazar Logo" />
                  <span >Ecobazar</span>
                </a>
              </div>
              <p className="font-normal text-[14px] leading-5 text-[#808080]">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <div className="flex flex-row md:flex-col lg:flex-row gap-2 text-[14px] md:[10px] lg:text-[16px]">
                <p className="hover-border">(219) 555-0114</p>
                <p className="text-[#808080]">or</p>
                <p className="hover-border">
                  Proxy@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium text-[14px] md:text-[16px] leading-6">
                My Account
              </div>
              <div className="font-normal text-[13px] md:text-[14px] leading-5 text-[#999999]">
                <p className="hover:text-gray-200">My Account</p>
                <p className="hover:text-gray-200">Order History</p>
                <p className="hover:text-gray-200">Shopping Cart</p>
                <p className="hover:text-gray-200">Wishlist</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium text-[14px] md:text-[16px] leading-6">Helps</div>
              <div className="font-normal text-[13px] md:text-[14px]  leading-5 text-[#999999]">
                <p className="hover:text-gray-200">Contact</p>
                <p className="hover:text-gray-200">FAQs</p>
                <p className="hover:text-gray-200">Terms & Conditions</p>
                <p className="hover:text-gray-200">Privacy Policy</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium text-[14px] md:text-[16px] leading-6">Proxy</div>
              <div className="font-normal text-[13px] md:text-[14px]  leading-5 text-[#999999]">
                <p className="hover:text-gray-200">About</p>
                <p className="hover:text-gray-200">Shop</p>
                <p className="hover:text-gray-200">Product</p>
                <p className="hover:text-gray-200">Track Order</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium text-[14px] md:text-[16px] leading-6">
                Categories
              </div>
              <div className="font-normal text-[13px] md:text-[14px]  leading-5 text-[#999999]">
                <p className="hover:text-gray-200">Fruit & Vegetables</p>
                <p className="hover:text-gray-200">Meat & Fish</p>
                <p className="hover:text-gray-200">Bread & Bakery</p>
                <p className="hover:text-gray-200">Beauty & Health</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#808080] mt-10 py-5">
            <p className="text-[#808080] text-center md:text-left">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>
            <div className="flex items-center justify-center gap-2 h-[32px] mt-4 md:mt-0">
              <img src={ApplePay} className="h-full" alt="ApplePay" />
              <img src={visa} className="h-full" alt="Visa" />
              <img src={discover} className="h-full" alt="Discover" />
              <img src={mastercard} className="h-full" alt="Mastercard" />
              <img src={Secure} className="h-full" alt="Secure" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default FooterBar;
