import React from "react";

const Login = () => {
  return (
    <>
      <section className="text-skin-base body-font">
        <div className="container py-24 h-full flex  justify-center ">
          <div className="lg:w-2/6 md:w-1/2 bg-skin-backgroud rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className=" text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
              <label for="full-name" className="leading-7 text-sm ">
                Email
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm ">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
