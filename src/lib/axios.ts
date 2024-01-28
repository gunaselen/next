import axios from "axios";
const BASE_URL = "https://mohawksae.azurewebsites.net/mohawk/v1";
export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});