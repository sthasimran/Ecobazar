import { Button } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

const SignIn = () => {
  return (
    <section className=" bg-slate-100 ">
    
      <div className="lg:mx-auto lg:px-28 md:px-10  h-[100px] w-full bg-[url('./assets/image/bg-sign.jpg')] bg-cover flex items-center justify-start">
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

   

      <div className="flex justify-center items-center h-[500px] ">
        <div className="p-6 shadow-lg rounded-md w-[450px] bg-[#FFFFFF] ">
          <h5 className="font-semibold text-[32px] leading-[38px] text-[#1A1A1A] text-center mb-[20px]">
            Sign In
          </h5>
          <Formik
            initialValues={{
              email: "",
              password: "",
              rememberMe: false,
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <div className="flex flex-col gap-[16px]">
                <div>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="border border-[#E6E6E6] rounded-md w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <div className="relative">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="border rounded-md w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Field
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      className="mr-2"
                    />
                    <label htmlFor="rememberMe" className="ml-2">
                      Remember Me
                    </label>
                  </div>
                  <div>
                    <a href="">Forgot Password</a>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <Button
                  type="submit"
                  className="w-full bg-primary rounded-full hover:bg-transparent hover:text-[#1A1A1A] "
                >
                  Login
                </Button>
              </div>
            </Form>
          </Formik>
          <div className="flex items-center justify-center gap-1 text-[#666666] text-[14px] leading[21px] font-normal">
            <p>Don't have an account?</p>
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
