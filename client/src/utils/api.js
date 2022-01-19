import axios from "axios"

const baseURL = 'http://localhost:8000';// base url for all endpoints

const apiConfig = {
    baseURL,
    timeout: 30000000,
    headers: {
      'Content-Type': 'application/json',
      // "Access-Control-Allow-Origin": '*',
    },
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  };
  
const api = axios.create({ ...apiConfig });

class APIServices {

    //example
    async loginUser(data) {
    return api.post(`/login`, data);
    }
}      

const instance = new APIServices();//an instance of axios that can be used globally

export default instance;