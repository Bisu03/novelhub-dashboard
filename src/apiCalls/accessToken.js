import Cookies from "js-cookie";

export const getToken = {
  headers: {
    Accept: "*/*",
    Authorization: "Bearer " + Cookies.get("adminAccessToken"),
    "Content-Type": "application/json",
  },
};
