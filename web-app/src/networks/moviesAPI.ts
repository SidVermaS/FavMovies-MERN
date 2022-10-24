import { URLE } from "../utils/constants";
import { customError } from "../utils/methods";
import api from "./api";

const fetchMoviesAPI = async (params: any) => {
  try {
    return await api
      .get(URLE.movies, { params })
      .then((response) => ({ status: response.status, data: response.data }))
      .catch((err) => ({
        status: err.response.status,
        data: err.response.data,
      }));
  } catch (error) {
    return customError();
  }
};
const addMovieAPI = async (payload: any) => {
  try {
    return await api
      .post(URLE.movies, payload)
      .then((response) => ({ status: response.status, data: response.data }))
      .catch((err) => ({
        status: err.response.status,
        data: err.response.data,
      }));
  } catch (error) {
    return customError();
  }
};
const updateMovieAPI = async (payload: any) => {
  try {
    return await api
      .patch(URLE.movies, payload)
      .then((response) => ({ status: response.status, data: response.data }))
      .catch((err) => ({
        status: err.response.status,
        data: err.response.data,
      }));
  } catch (error) {
    return customError();
  }
};
const deleteMovieAPI=async(id:any)=>{
  try {
    return await api
      .delete(`${URLE.movies}/${id}`)
      .then((response) => ({ status: response.status, data: response.data }))
      .catch((err) => ({
        status: err.response.status,
        data: err.response.data,
      }));
  } catch (error) {
    return customError();
  }
}
export { addMovieAPI,deleteMovieAPI, fetchMoviesAPI, updateMovieAPI };
