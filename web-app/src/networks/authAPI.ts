import { URLE } from "../utils/constants";
import { customError } from "../utils/methods";
import api from "./api";

const userregisterAPI = async (user: any) => {
  try {
    return await api
      .post(URLE.userregister, user)
      .then((response) => ({ status: response.status, data: response.data }))
      .catch((err) => ({
        status: err.response.status,
        data: err.response.data,
      }));
  } catch (error) {
    return customError();
  }
};
const userloginAPI = async (user: any) => {
    try {
      return await api
        .post(URLE.userlogin, user)
        .then((response) => ({ status: response.status, data: response.data }))
        .catch((err) => ({
          status: err.response.status,
          data: err.response.data,
        }));
    } catch (error) {
      return customError();
    }
  };
export {userloginAPI, userregisterAPI };
