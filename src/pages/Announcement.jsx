import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { URL } from "../apiCalls/apiUrl";

const Announcement = () => {
  const [announceData, setAnnounceData] = useState({
    title: "",
    desc: "",
    date: new Date().toISOString().substring(0, 10),
  });

  const [getData, setGetData] = useState([]);
  const [loding, setloding] = useState(false);
  const [search, setSearch] = useState("");

  const handlechange = (e) => {
    setAnnounceData({ ...announceData, [e.target.name]: e.target.value });
  };

  console.log(search);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const { data } = await axios.get(
          `${URL}/api/announce/allAnnounce?search=${search}`
        );
        if (data.errors) {
          alert(data.errors);
        }
        setGetData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ search]);

  console.log(getData);

  const handlePost = async () => {
    setloding(true);
    try {
      let headersList = {
        Accept: "*/*",
        Authorization: "Bearer " + Cookies.get("adminAccessToken"),
      };

      let bodyContent = {
        title: announceData.title,
        desc: announceData.desc,
        date: announceData.date,
      };

      let reqOptions = {
        url: `${URL}/api/announce/postannounce`,
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };

      let { data } = await axios.request(reqOptions);

      if (data.errors) {
        alert(data.errors);
      }
      alert(data.message);
      setloding(false);
      window.location.reload();
    } catch (error) {
      setloding(false);
      console.log(error);
      alert("something went wrong");
    }
  };

  const HandleDelete = async (id) => {
    console.log(id);
    try {
      let headersList = {
        Accept: "*/*",
        Authorization: "Bearer " + Cookies.get("adminAccessToken"),
      };

      let reqOptions = {
        url: `${URL}/api/announce/deleteannounce/${id}`,
        method: "DELETE",
        headers: headersList,
      };

      let { data } = await axios.request(reqOptions);

      if (data.errors) {
        alert(data.errors);
      }
      alert(data.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };

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
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-skin-grey">
                  Title
                </label>
                <input
                  type="text"
                  onChange={handlechange}
                  value={announceData.title}
                  name="title"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700   focus:ring-2  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-skin-grey">
                  Date
                </label>
                <input
                  type="Date"
                  id="email"
                  onChange={handlechange}
                  value={announceData.date}
                  name="date"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700   focus:ring-2  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-skin-grey">
                  Message
                </label>
                <textarea
                  id="message"
                  name="desc"
                  onChange={handlechange}
                  value={announceData.desc}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700   focus:ring-2  h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={handlePost}
                className="flex mx-auto text-white bg-skin-backgroud border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {loding ? "Please Wait" : " Announce"}
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
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600">
                Search by Title
              </label>
              <input
                type="search"
                id="full-name"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                name="search"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:text-skin-inverted focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
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
            {getData?.map((data) => (
              <tr key={data._id}>
                <td className="border border-skin-color7 px-4 py-2">
                  {data?.desc}
                </td>
                <td className="border border-skin-color7 px-4 py-2">
                  {data?.title}
                </td>
                <td className="border border-skin-color7 px-4 py-2">
                  {data?.userId?.name}
                </td>
                <td className="border border-skin-color7 px-4 py-2">
                  {data?.date}
                </td>
                <td className="border  px-4 py-2 flex items-center justify-center text-skin-base ">
                  <button
                    onClick={() => HandleDelete(data._id)}
                    className="border  px-4 py-2 bg-skin-color4 text-skin-base ">
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Announcement;
