import axios from "axios";

const token = JSON.parse(localStorage.getItem("_token") as string);
const instance = axios.create({
  headers: {
    "authorization": token,
  },
});
export default instance;
