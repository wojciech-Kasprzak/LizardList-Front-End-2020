import axios from "axios";

export var instance = axios.create({
  baseURL: `http://localhost:3000`,
});
