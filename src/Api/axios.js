import axios from "axios";

const instance = axios.create({
  baseURL: "https://cafe-backend-0ibj.onrender.com", // backend ka URL
  withCredentials: false,
});

export default instance;
