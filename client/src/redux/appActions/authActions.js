import APIServices from "../../utils/api";
import { GET_USERS } from "../ActionTypes";

export const handleLoginUser = (userData) => async (dispatch) => {
    try {
        // Result comes from the endpoint
        // Let's assume an array of objects is returned from the endpoint
      const response = await APIServices.loginUser(userData);
      console.log("This is the Logged in user", response.data);
  
      await dispatch({ type: GET_USERS, payload: response.data });
      console.log(response.data)
      // Result is sent to the store via dispatch (Pass payload if needed)
    } catch (error) {
      // Handle exceptions here
      console.log(`Error from handleLoginUser: ${error}`);
    }
  };