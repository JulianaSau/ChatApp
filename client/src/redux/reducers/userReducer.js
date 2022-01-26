import {
  SEARCH_USERS_FAILURE,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_START,
} from "../actionTypes";

const initialState = {
  searchUserStart: {},
  searchUserSuccess: {},
  searchUserFailure: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // STEP THREE
    // A new state is returned with the data from the endpoint
    // The GET USERS case is handled here
    case SEARCH_USERS_START:
      return {
        ...state,
        searchUserStart: payload,
      };
    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        searchUserSuccess: payload,
      };
    case SEARCH_USERS_FAILURE:
      return {
        ...state,
        searchUserFailure: payload,
      };

    // Default state is returned
    default:
      return state;
  }
};

export default userReducer;
