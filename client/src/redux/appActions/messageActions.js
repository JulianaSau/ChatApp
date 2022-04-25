import { SEND_MESSAGE, GET_ALL_MESSAGES } from "../actionTypes";
import APIServices from "../../utils/api";

const sendMessages = (sendMessage) => ({
  type: SEND_MESSAGE,
  payload: sendMessage,
});

export const handleSendMessages = (message_data) => async (dispatch) => {
  try {
    const { data } = await APIServices.sendMessage(message_data);
    await dispatch(sendMessages(data));
  } catch (error) {
    console.log(`Error from handleSendMessages: ${error}`);
  }
};

const getAllMessages = (messages) => ({
  type: GET_ALL_MESSAGES,
  payload: messages,
});

export const handleGetAllMessages = (chatId) => async (dispatch) => {
  try {
    const { data } = await APIServices.sendMessage(chatId);
    await dispatch(getAllMessages(data));
  } catch (error) {
    console.log(`Error from handleGetAllMessages: ${error}`);
  }
};
