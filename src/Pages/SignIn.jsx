import { Button } from "flowbite-react";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoEyeOffSharp, IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="bg-gray-100 ">
      <div className="h-[100px] w-full bg-[url('./assets/image/bg-sign.jpg')] bg-cover flex items-center justify-start">
        <div>
          <GoHome color="grey" size={25} />
        </div>
        <div>
          <FaAngleRight color="grey" size={20} />
        </div>
        <a className="text-white">Account</a>
        <div>
          <FaAngleRight color="grey" size={20} />
        </div>
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-white"
          }
        >
          <a className="">Login</a>
        </NavLink>
      </div>

      <div className="flex justify-center items-center h-screen ">
        <div className="p-6 shadow-lg rounded-md w-[520px] bg-white ">
          <h5 className="font-semibold text-[32px] leading-[38px] text-[#1A1A1A] text-center mb-[20px]">
            Sign In
          </h5>
          <div className="flex flex-col gap-[16px]">
            <div>
              <label for="email mb-2"></label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border border-[#E6E6E6] rounded-md w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              ></input>
            </div>

            <div>
              <label for="password mb-2"></label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded-md w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <IoEyeOffSharp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <IoEyeOutline className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <input type="checkbox" className=""></input>
                <label for="remember" className="">Remember Me</label>
              </div>
              <div>
                <a href="">Forgot Password</a>
              </div>
            </div>
          </div>
          <div className="my-4">
            <Button className="w-full bg-primary rounded-full hover:bg-transparent hover:text-[#1A1A1A] ">Login</Button>
          </div>
          <div className="flex items-center justify-center gap-1 text-[#666666] text-[14px] leading[21px] font-normal">
            <p>Don't have account?</p>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-[#1A1A1A] font-medium"
              }
            >
              <a>Register</a>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
