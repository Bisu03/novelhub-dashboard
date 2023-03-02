import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getToken } from "../apiCalls/accessToken";
import { URL } from "../apiCalls/apiUrl";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(URL + "/api/auth/getuser", getToken)
        .then(({ data }) => {
          if (data.errors) {
            return alert(data.errors);
          } else {
            return setUser(data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getData();
  }, [setUser]);

  console.log(user);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

