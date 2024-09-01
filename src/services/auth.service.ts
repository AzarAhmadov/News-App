import UserApi from "../api/user.api";
import { API } from "../utils/api";

export const serviceAuthLogin = async (data: any) => {
  try {
    const res = await API.post(UserApi.login, data);
    console.log(res)
  } catch (e) {
    return false;
  }
};
