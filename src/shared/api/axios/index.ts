import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7063/api",
});

export default axiosInstance;
