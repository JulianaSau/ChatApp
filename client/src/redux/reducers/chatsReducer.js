import {
  GET_ALL_CHATS,
  CREATE_DM,
  CREATE_GROUP,
  ADD_USER_TO_ROOM,
  REMOVE_USER_FROM_ROOM,
  SELECTED_CHAT,
} from "../actionTypes";

const initialState = {
  AllChats: [],
  selectedChat: {},
  createDMData: {},
  createGroupData: {},
  userToAdd: {},
  userToRemove: {},
};

const chatsReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ALL_CHATS:
      return {
        ...state,
        allChats: payload,
      };
    case CREATE_DM:
      return {
        ...state,
        createDMData: payload,
      };
    case CREATE_GROUP:
      return {
        ...state,
        createGroupData: payload,
      };
    case ADD_USER_TO_ROOM:
      return {
        ...state,
        userToAdd: payload,
      };
    case REMOVE_USER_FROM_ROOM:
      return {
        ...state,
        userToRemove: payload,
      };
    case SELECTED_CHAT:
      return {
        ...state,
        selectedChat: payload,
      };

    default:
      return state;
  }
};

export default chatsReducer;
