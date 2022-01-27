import {
  CREATE_DM,
  CREATE_GROUP,
  ADD_USER_TO_ROOM,
  REMOVE_USER_FROM_ROOM,
} from "../actionTypes";

const initialState = {
  createDMData: {},
  createGroupData: {},
  userToAdd: {},
  userToRemove: {},
};

const chatsReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
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

    default:
      return state;
  }
};

export default chatsReducer;
