import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.PROD
    ? "https://bistro-boss-server-sigma-eight.vercel.app"
    : "http://localhost:3000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
