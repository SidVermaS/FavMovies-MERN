import axios from "axios";
import { Cookies } from "react-cookie";
import { URLE } from "../utils/constants";


const api = axios.create({
  baseURL: URLE.baseURL,
});

const cookies = new Cookies();
api.interceptors.request.use((config: any) => {
  const token = cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// api.interceptors.response.use(
//     (response)=>response,
//     (error)=>error.response.status===401?handleLogout():Promise.reject(error)
// )

export default api