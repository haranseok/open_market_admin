import { useTokenStore } from '@/stores/TokenStore';
import { HttpCommunicator } from "@/api/HttpCommunicator";
import { AdminUserInterface } from "@/interfaces/AdminUserInterface";
import { CommonInterface } from "@/interfaces/CommonInterface";

const token = useTokenStore();

// @ts-ignore
const url = import.meta.env.VITE_API_URL;

export class AdminUserInfoService {
  static async getUserInfoByToken() {
    const header = { headers: { "access_token": token.token.access_token } }
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/admin_user/my_info`, "GET", {}, header)
    return res.data
  }

  static async getList(page: number, limit: any): Promise<AdminUserInterface.ResponseListSchema> {
    const header = { headers: { "access_token": token.token.access_token } }
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/admin_user/list?page=${page}&limit=${limit}`, "GET", {}, header)
    return res.data
  }

  static async getOneInfoById(id: any): Promise<AdminUserInterface.Item> {
    const header = { headers: { "access_token": token.token.access_token } }
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/admin_user/get_one?id=${id}`, "GET", {}, header)
    return res.data
  }

  static async doDeleteById(id: any): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/admin_user/delete`, "POST", { id: id }, header)
  }

  static async doUpdateById(id: any, name: string, password: string, permission: string): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/admin_user/update`, "POST", { id: id, name: name, password: password, permission: permission }, header)
  }

  static async doInsert(name: string, username: string, password: string, permission: string): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/admin_user/sign_up`, "POST", { name: name, username: username, password: password, permission: permission }, header)
  }
}
