import axios from "axios";

const API = axios.create({
  baseURL: "https://burp-platform-backend.onrender.com",
  withCredentials: true,
});

export default API;
