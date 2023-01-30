/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineSetting,
  AiOutlineSound,
} from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className=" bg-skin-backgroud body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <button
            onClick={() => setShow(!show)}
            className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            {show ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-skin-base ">DASHBOARD</span>
          </a>
        </div>
      </header>
      {show && (
        <div
          className="w-60 h-full bg-skin-backgroud  absolute"
          id="sidenavSecExample">
          <div className="pt-4 pb-2 px-6 ">
            <a href="#!">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    className="rounded-full w-10"
                    alt="Avatar"
                  />
                </div>
                <div className="grow ml-3">
                  <p className="text-sm font-semibold text-skin-red">
                    User Name
                  </p>
                </div>
              </div>
            </a>
          </div>
          <ul className="relative px-1">
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-skin-base text-ellipsis whitespace-nowrap rounded  hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                href="/usermanagment"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary">
                <FaUserAlt className="w-3 h-3 mr-3" />
                <span>Manage user</span>
              </a>
            </li>
            <li className="relative" id="sidenavSecEx2">
              <a
                href="/announcement"
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-skin-base text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSidenavSecEx2"
                aria-expanded="false"
                aria-controls="collapseSidenavSecEx2">
                <AiOutlineSound className="w-3 h-3 mr-3" />
                <span>Announcement</span>
              </a>
            </li>
            <li className="relative" id="sidenavSecEx3">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-skin-base text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                data-mdb-ripple="true"
                href="/namagenovel"
                data-mdb-ripple-color="primary"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSidenavSecEx3"
                aria-expanded="false"
                aria-controls="collapseSidenavSecEx3">
                <AiOutlineSetting className="w-3 h-3 mr-3" />
                <span>Manage Novel</span>
              </a>
            </li>
          </ul>
          <hr className="my-2" />
          <ul className="relative px-1">
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-skin-base text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                href="/suggestion"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary">
                <MdHowToVote className="w-3 h-3 mr-3" />
                <span>Suggestions</span>
              </a>
            </li>
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-skin-base text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                href=""
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-3 h-3 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"></path>
                </svg>
                <span>Feedbacks</span>
              </a>
            </li>
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-skin-base text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                href=""
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary">
                <AiOutlineLogout className="w-3 h-3 mr-3" />
                <span>Logout</span>
              </a>
            </li>
          </ul>
          <div className="text-center bottom-0 absolute w-full">
            <hr className="m-0" />
            <p className="py-2 text-sm text-skin-base">Webnovelhub.com</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
