// // src/api/axios.js
// import axios from 'axios';

// export default axios.create({
//   baseURL: 'http://localhost:5000',
// });





import axios from "axios";

// Vite ke env variable se API base URL lo
const API_BASE = import.meta.env.VITE_API_BASE;

console.log("API BASE URL:", API_BASE);

export default axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});
