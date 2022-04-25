import { SEND_MESSAGE, GET_ALL_MESSAGES } from "../actionTypes";

const initialState = {
  messages: [],
  sendMessage: {},
  loading: "",
};

const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEND_MESSAGE:
      return {
        ...state,
        sendMessage: payload,
        loading: true,
      };
    case GET_ALL_MESSAGES:
      return {
        ...state,
        messages: payload,
      };
    default:
      return state;
  }
};

export default messageReducer;
