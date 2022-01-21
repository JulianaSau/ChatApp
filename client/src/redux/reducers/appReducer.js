import { LOGIN_USER } from "../actionTypes";

const initialState = {
  loggedInUser: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // STEP THREE
    // A new state is returned with the data from the endpoint
    // The GET USERS case is handled here
    case LOGIN_USER:
      return {
        ...state,
        loggedInUser: payload,
      };

    // Default state is returned
    default:
      return state;
  }
};

export default userReducer;
