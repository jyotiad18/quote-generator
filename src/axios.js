import axios from "axios";
const instance = axios.create({
  baseURL: "https://quote-garden.herokuapp.com/api/v3/",
});

export default instance;