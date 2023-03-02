
import Cookies from "js-cookie";

export const UserLogOut = () => {
  Cookies.remove("adminAccessToken");
  return alert("logout succesfull");
};
