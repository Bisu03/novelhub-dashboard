import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { URL } from "../apiCalls/apiUrl";

const UserManagment = () => {
  const [user, setUser] = useState();

  const fetchUser = async () => {
    let headersList = {
      Accept: "*/*",
      Authorization: "Bearer " + Cookies.get("adminAccessToken"),
    };

    let reqOptions = {
      url: URL + "/api/auth/getalluser",
      method: "GET",
      headers: headersList,
    };

    let { data } = await axios.request(reqOptions);
    setUser(data);
    console.log(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e, i) => {
    const { value, name } = e.target;

    const newState = [...user];
    newState[i] = {
      ...newState[i],
      [name]: value,
    };

    console.log(newState);
    setUser(newState);
  };

  const handleUpdate = async (index) => {
    console.log(user[index].role);

    let headersList = {
      Accept: "*/*",
      Authorization: "Bearer " + Cookies.get("adminAccessToken"),
    };

    let bodyContent = {
      id: user[index]._id,
      role: user[index].role,
      isBlocked: user[index].isBlocked,
    };

    let reqOptions = {
      url: URL + "/api/auth/updateuser",
      method: "PUT",
      headers: headersList,
      data: bodyContent,
    };

    let { data } = await axios.request(reqOptions);
    if (data.error) {
      alert(data.error);
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-skin-grey">
              User Managment Page
            </h1>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600">
                Search by email or username
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
              <th className="px-4 py-2">Emails</th>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Update Status</th>
              <th className="px-4 py-2">Update Role</th>
              <th className="px-4 py-2">Update</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((data, index) => (
              <tr key={data._id}>
                <td>
                  <input
                    className="border border-skin-color7 px-4 py-2"
                    name="email"
                    readOnly
                    value={data?.email}
                    onChange={(e) => handleChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    className="border border-skin-color7 px-4 py-2"
                    name="name"
                    readOnly
                    value={data?.name}
                    onChange={(e) => handleChange(e, index)}
                  />
                </td>
                <td>
                  <select
                    value={data?.isBlocked}
                    onChange={(e) => handleChange(e, index)}
                    className="border border-skin-color7 px-4 py-2"
                    name="isBlocked">
                    <option value="true">Blocked</option>
                    <option value="false">UnBlocked</option>
                  </select>
                </td>
                <td>
                  <select
                    value={data?.role}
                    onChange={(e) => handleChange(e, index)}
                    className="border border-skin-color7 px-4 py-2"
                    name="role">
                    <option value="SuperAdmin">Super Admin</option>
                    <option value="Admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </td>

                <td
                  onClick={() => handleUpdate(index)}
                  className="border  px-4 py-2 bg-skin-color4 text-skin-base ">
                  update
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserManagment;
