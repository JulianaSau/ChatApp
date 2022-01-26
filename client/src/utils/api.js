import axios from "axios";

const baseURL = "http://localhost:5000"; // base url for all endpoints

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
  async getAllUsers(data) {
    return api.get(`/api/user`, data);
  }

  async searchUsers(query) {
    return api.post(`/api/user/?search=${query}`);
  }
}

const instance = new APIServices(); //an instance of axios that can be used globally

export default instance;
