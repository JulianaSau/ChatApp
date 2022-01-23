// import { useState } from 'react';

// export default function useToken() {

//   const getToken = () => {
//     const tokenString = localStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
//   };

//   const [token, setToken] = useState(getToken());

//   const saveToken = userToken => {
//     localStorage.setItem('token', JSON.stringify(userToken));
//     setToken(userToken.token);
//   };

//   return {
//     setToken: saveToken,
//     token
//   }
// }

// return the token from the local storage
export const getToken = () => {
  const tokenString = localStorage.getItem("userInfo");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
  // return localStorage.getItem("token") || null;
};

export const setToken = (userInfo) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

// return the user from the local storage
export const getUser = () => {
  const user = JSON.parse(localStorage.getItem("userInfo") || null);
  return user;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  localStorage.removeItem("session_id");
};

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
