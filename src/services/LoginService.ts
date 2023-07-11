import Axios from "axios";
import { useUserStore } from "@/stores/UseUserStore";
import { AuthInterface } from "@/interfaces/AuthInterface";
import { HttpCommunicator } from "@/api/HttpCommunicator";
const userInfoStore = useUserStore();

// @ts-ignore
const url: any = import.meta.env.VITE_API_URL;

export class LoginService {
  static async doSignUp(userSignup: AuthInterface.PropsSignUP) {
    return Axios.post(url + "/api/v1/admin/admin_user/sign_up", userSignup)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  static async doLogin(params: AuthInterface.PropsLogin) {
    const data: any = await HttpCommunicator.exec(
      url + "/api/v1/admin/admin_user/sign_in",
      "POST",
      params,
      {}
    );
    userInfoStore.setUserInfo(data);
    return data;
  }
}
