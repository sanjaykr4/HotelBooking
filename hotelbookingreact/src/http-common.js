import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:7777/api",
  headers: {
    "Content-type": "application/json"
  }
});