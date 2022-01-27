import APIServices from "../../utils/api";
import {
  CREATE_DM,
  CREATE_GROUP,
  ADD_USER_TO_ROOM,
  REMOVE_USER_FROM_ROOM,
} from "../ActionTypes";

//Creating a DM
const createDM = (createDMData) => ({
  type: CREATE_DM,
  payload: createDMData,
});

export const handleCreateDM = (dmData) => async (dispatch) => {
  try {
    const { data } = await APIServices.createDM(dmData);
    await dispatch(createDM(data));
  } catch (error) {
    console.log(`Error from handleCreateDM: ${error}`);
  }
};

//Creating a Group
const createGroup = (createGroupData) => ({
  type: CREATE_GROUP,
  payload: createGroupData,
});

export const handleCreateGroup = (groupData) => async (dispatch) => {
  try {
    const { data } = await APIServices.createGroup(groupData);
    await dispatch(createGroup(data));
  } catch (error) {
    console.log(`Error from handleCreateGroup: ${error}`);
  }
};

//Adding a user to a room
const addUserToRoom = (userToAdd) => ({
  type: ADD_USER_TO_ROOM,
  payload: userToAdd,
});

export const handleAddUserToRoom = (userToAdd) => async (dispatch) => {
  try {
    const { data } = await APIServices.addUser(userToAdd);
    await dispatch(addUserToRoom(data));
  } catch (error) {
    console.log(`Error from handleAddUserToRoom: ${error}`);
  }
};

//Removing a user to a room
const removeUserFromRoom = (userToRemove) => ({
  type: REMOVE_USER_FROM_ROOM,
  payload: userToRemove,
});

export const handleRemoveUserFromRoom = (userToRemove) => async (dispatch) => {
  try {
    const { data } = await APIServices.removeUser(userToRemove);
    await dispatch(removeUserFromRoom(data));
  } catch (error) {
    console.log(`Error from handleRemoveUserFromRoom: ${error}`);
  }
};
