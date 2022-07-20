import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block w-full h-full absolute object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/7645af9d-2679-4f54-b57d-3a6b5c670e14/IN-en-20220711-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed w-full h-screen top-0 left-0"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[510px] bg-black/75 text-white mx-auto">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form className="flex flex-col py-4 w-full">
                <input
                  className="p-3 my-3 rounded bg-gray-600"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="p-3 my-3 rounded bg-gray-600"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 rounded py-3 my-6 font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="my-8 ">
                  <span className="text-gray-600">
                    Already subscribe to Netflix?
                  </span>
                  <Link to="/login"> Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
