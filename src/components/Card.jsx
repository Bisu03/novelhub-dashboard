import React from "react";

const Card = () => {
  return (
    <div>
      <div className="flex justify-center m-4 ">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Novel Name
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              esse sunt iusto minus fuga. Voluptates odit ipsa iste fugiat
              facere dignissimos debitis aliquid quam suscipit iusto? Iste ad ea
              sint?
            </p>
            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            <button
              className=" mt-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Update Chapters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
