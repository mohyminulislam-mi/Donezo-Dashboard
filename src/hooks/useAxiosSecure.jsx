import axios from "axios";

const useAxiosSecure = axios.create({
  baseURL: "https://task-api-eight-flax.vercel.app/api",
});

useAxiosSecure.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default useAxiosSecure;
