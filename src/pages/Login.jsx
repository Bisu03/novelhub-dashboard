import Cookies from "js-cookie";
import React, { useState } from "react";
import axios from "axios";
import { URL } from "../apiCalls/apiUrl";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const handlechange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setloading(true);
    await axios
      .post(`${URL}/api/auth/signin`, {
        email: userData.email,
        password: userData.password,
      })
      .then(({ data }) => {
        if (data.error) {
          console.log(data);
          setloading(false);
          return alert(data.error);
        } else {
          Cookies.set("adminAccessToken", data.token);
          setloading(false);
          alert(data.message);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          navigate("/");
        }
      })
      .catch((e) => {
        setloading(false);
        alert("something went wrong ");
      });
  };

  return (
    <>
      <div className="flex justify-center  ">
        <div className="flex  justify-center  shadow max-w-7xl  bg-gradient-to-bl from-violet-600 via-purple-600 to-violet-500 m-4 p-10 rounded ">
          <div className="h-[90%] w-full mt-7">
            <div className="mb-6 text-white"></div>
            <div className=" flex flex-col justify-center items-center space-y-2">
              <div>
                <h1 className="text-xl font-semibold text-white">
                  Admin Login
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-7 space-y-6 md:space-y-8">
              <div className="space-y-2">
                <h1 className="text-base text-gray-200">Email</h1>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={userData.email}
                  onChange={handlechange}
                  className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-base text-gray-200">Password</h1>
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={userData.password}
                  onChange={handlechange}
                  className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"
                />
              </div>
            </div>
            <div className="flex w-full justify-center mt-5 ">
              <input
                type="checkbox"
                id="showPassword"
                onClick={() => setShow(!show)}
              />
              <h1 className="pl-1 text-gray-200">Show password</h1>
            </div>
            <div className="text-center mt-5">
              <button
                onClick={handleSubmit}
                className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-b from-violet-700 via-violet-600 to-violet-700 hover:brightness-105  font-medium ">
                {loading ? "Please Wait" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
