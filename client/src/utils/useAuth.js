import { useState } from "react";

export default function useAuth() {
  const getToken = () => {
    const userInfo = localStorage.getItem("userInfo");
    const userToken = JSON.parse(userInfo);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("userInfo", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  // remove the token and user from the session storage
  const removeUser = () => {
    localStorage.removeItem("userInfo");
  };

  // return the user from the local storage
  const getUser = () => {
    const user = JSON.parse(localStorage.getItem("userInfo") || null);
    return user;
  };

  return {
    setToken: saveToken,
    token,
    removeUser,
    getUser,
  };
}

// ================================================

// The section of the password length
// export const isLength = (password) => {
//   if (password.length < 6) return true;
//   return false;
// };

// // The section of the confirm password
// export const isMatch = (password, cfpassword) => {
//   if (password === cfpassword) return true;
//   return false;
// };
