import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Announcement = () => {
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-skin-grey">
            Announcement Managment Page
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-skin-grey">
                  Title
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-skin-grey">
                  Date
                </label>
                <input
                  type="Date"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="message" className="leading-7 text-sm text-skin-grey">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-skin-backgroud border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Announce
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-skin-backgroud h-1 mt-2  " />
      <section className="text-gray-600 body-font  ">
        <div className="container px-5 py-24 mx-auto">
          <section className="text-skin-grey bg-gray-900 body-font relative"></section>

          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label for="full-name" className="leading-7 text-sm text-gray-600">
                Search by Title
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:text-skin-inverted focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-skin-backgroud border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Search
            </button>
          </div>
        </div>
      </section>

      <div className="container px-5 flex justify-center mx-auto w-full  py-5">
        <table className="table  ">
          <thead>
            <tr>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Announce By</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-skin-color7 px-4 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                quod facere, inventore saepe consequuntur error qui voluptatum
                praesentium quo vero aspernatur, quisquam dignissimos dolores
                sequi quae recusandae cupiditate doloremque. Iure.
              </td>
              <td className="border border-skin-color7 px-4 py-2">Maintainance</td>
              <td className="border border-skin-color7 px-4 py-2">user72346</td>
              <td className="border border-skin-color7 px-4 py-2">20.12.2022</td>
              <td className="border  px-4 py-2 flex items-center justify-center text-skin-base ">
                <button className="border  px-4 py-2 bg-skin-color4 text-skin-base ">
                  <AiFillDelete />
                </button>
              </td>
            </tr>
            <tr>
              <td className="border border-skin-color7 px-4 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                quod facere, inventore saepe consequuntur error qui voluptatum
                praesentium quo vero aspernatur, quisquam dignissimos dolores
                sequi quae recusandae cupiditate doloremque. Iure.
              </td>
              <td className="border border-skin-color7 px-4 py-2">Maintainance</td>
              <td className="border border-skin-color7 px-4 py-2">user72346</td>
              <td className="border border-skin-color7 px-4 py-2">20.12.2022</td>
              <td className="border  px-4 py-2 flex items-center justify-center text-skin-base ">
                <button className="border  px-4 py-2 bg-skin-color4 text-skin-base ">
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Announcement;
