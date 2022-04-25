import axios from "axios";

const baseURL = "http://localhost:5000"; // base url for all endpoints

const getToken = () => {
  const userInfo = localStorage.getItem("userInfo");
  const userToken = JSON.parse(userInfo);
  return userToken?.token;
};

const token = getToken();

const apiConfig = {
  baseURL,
  timeout: 30000000,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": '*',
  },
  validateStatus: function (status) {
    return status < 500; // Resolve only if the status code is less than 500
  },
};

const api = axios.create({ ...apiConfig });

class APIServices {
  //example
  async registerUser(data) {
    return api.post(`/api/user`, data);
  }

  async loginUser(data) {
    return api.post(`/api/user/login`, data);
  }

  async getAllUsers(data) {
    return api.get(`/api/user`, data);
  }

  async searchUsers(query) {
    return api.post(`/api/user/?search=${query}`);
  }

  async getAllChats() {
    return api.get(`/api/chat`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async createDM(room_data) {
    return api.post(`/api/chat`, room_data);
  }

  async createGroup(room_data) {
    return api.post(`/api/chat/group`, room_data);
  }

  async renameChat(room_name) {
    return api.post(`/api/chat/renamechat`, room_name);
  }

  async addUser(data) {
    return api.post(`/api/chat/groupadd`, data);
  }

  async removeUser(room_name) {
    return api.post(`/api/chat/groupremove`, room_name);
  }

  async sendMessage(message_data) {
    return api.post(
      `/api/message`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      message_data
    );
  }

  async getAllMessages(chatId) {
    return api.post(`/api/message/${chatId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const instance = new APIServices(); //an instance of axios that can be used globally

export default instance;
