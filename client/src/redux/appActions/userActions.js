import APIServices from "../../utils/api";
import { LOGIN_USER, REGISTER_USER } from "../ActionTypes";

export const handleLoginUser = (userData) => async (dispatch) => {
  try {
    // Result comes from the endpoint
    // Let's assume an array of objects is returned from the endpoint
    const response = await APIServices.loginUser(userData);
    console.log("This is the Logged in user", response.data);

    await dispatch({ type: LOGIN_USER, payload: response.data });
    console.log(response.data);
    // Result is sent to the store via dispatch (Pass payload if needed)
  } catch (error) {
    // Handle exceptions here
    console.log(`Error from handleLoginUser: ${error}`);
  }
};

export const handleRegisterUser = (userData) => async (dispatch) => {
  try {
    // Result comes from the endpoint
    // Let's assume an array of objects is returned from the endpoint
    const response = await APIServices.registerUser(userData);
    console.log("This is the Registered User", response.data);

    await dispatch({ type: REGISTER_USER, payload: response.data });
    console.log(response.data);
    // Result is sent to the store via dispatch (Pass payload if needed)
  } catch (error) {
    // Handle exceptions here
    console.log(`Error from handleRegisterUser: ${error}`);
  }
};
