import { Button } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoEyeOffSharp, IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import * as Yup from 'yup';

const SignUp = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  return (
    <section className="bg-gray-100 ">
      <div className="lg:mx-auto lg:px-28 md:px-10 px-3 h-[100px] w-full bg-[url('./assets/image/bg-sign.jpg')] bg-cover flex items-center justify-start">
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
          to="/signup"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-white"
          }
        >
          <a className="">Create Account</a>
        </NavLink>
      </div>

      <div className="flex justify-center items-center h-[550px] ">
        <div className="p-6 shadow-lg rounded-md w-[500px] bg-white ">
          <h5 className="font-semibold text-[32px] leading-[38px] text-[#1A1A1A] text-center mb-[20px]">
            Create Account
          </h5>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              termsAccepted: false
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
              password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
              termsAccepted: Yup.boolean()
                .oneOf([true], 'You must accept the terms & conditions')
                .required('You must accept the terms & conditions')
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
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <div className="relative">
                    <Field
                      type={showPassword1 ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="border rounded-md w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility1}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {showPassword1 ? (
                        <IoEyeOffSharp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <IoEyeOutline className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>

                <div>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="relative">
                    <Field
                      type={showPassword2 ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="border rounded-md w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility2}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {showPassword2 ? (
                        <IoEyeOffSharp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <IoEyeOutline className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                </div>
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    className="mr-2"
                  />
                  <label htmlFor="termsAccepted">Accept all terms & conditions</label>
                  <ErrorMessage name="termsAccepted" component="div" className="text-red-500" />
                </div>
              </div>
              <div className="my-4">
                <Button
                  type="submit"
                  className="w-full bg-primary rounded-full hover:bg-transparent hover:text-[#1A1A1A] "
                >
                  Create Account
                </Button>
              </div>
            </Form>
          </Formik>
          <div className="flex items-center justify-center gap-1 text-[#666666] text-[14px] leading[21px] font-normal">
            <p>Already have an account?</p>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-[#1A1A1A] font-medium"
              }
            >
              <a>Login</a>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
