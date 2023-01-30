import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Suggestion = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-skin-grey">
              Suggestion Managment Page
            </h1>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label for="full-name" className="leading-7 text-sm text-gray-600">
                Search by vote & username
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
      <div className="container px-5 flex justify-center mx-auto w-full ">
        <table className="table  ">
          <thead>
            <tr>
              <th className="px-4 py-2">Suggestion</th>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Vote</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-skin-color7 px-4 py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus adipisci voluptatum nulla, tempora quos enim amet
                ullam tenetur? Cumque mollitia rerum fugit, provident impedit
                enim reprehenderit ad officia accusamus at.
              </td>
              <td className="border border-skin-color7 px-4 py-2">userf8324792</td>
              <td className="border border-skin-color7 px-4 py-2">200</td>
              <td className="border border-skin-color7">
                <button className="border  px-4 py-2 bg-skin-color4 text-skin-base ">
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Suggestion;
