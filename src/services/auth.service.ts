import UserApi from "../api/user.api";
import { API } from "../utils/api";
import { serviceSetToken, serviceSetUser } from "./app.service";

const serviceAuthLogin = async (data: any) => {
  try {
    const res: any = await API.post(UserApi.login, data);
    serviceSetToken(res.token);
    serviceSetUser(res.user);
  } catch (e) {
    return false;
  }
};

export default serviceAuthLogin;
