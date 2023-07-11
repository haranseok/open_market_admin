import { useTokenStore } from '@/stores/TokenStore';
import { HttpCommunicator } from "@/api/HttpCommunicator";
import { CommonInterface } from "@/interfaces/CommonInterface";
import { AdminPermissionInterface } from "@/interfaces/AdminPermissionInterface";

const token = useTokenStore();

// @ts-ignore
const url = import.meta.env.VITE_API_URL;

export class AdminPermissionService {

  static async getList(page: number, limit: any): Promise<AdminPermissionInterface.ResponseListSchema> {
    const header = { headers: { "access_token": token.token.access_token } }
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/permission/list?page=${page}&limit=${limit}`, "GET", {}, header)
    return res.data
  }

  static async getOneInfoById(id: any): Promise<AdminPermissionInterface.Item> {
    const header = { headers: { "access_token": token.token.access_token } }
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/permission/get_one?id=${id}`, "GET", {}, header)
    return res.data
  }

  static async doDeleteById(id: any): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/permission/delete`, "POST", { id: id }, header)
  }

  static async doUpdateById(id: any, name: string, permission: string): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/permission/update`, "POST", { id: id, name: name, permission: permission }, header)
  }

  static async doInsert(name: string, permission: string): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/permission/create`, "POST", { name: name, permission: permission }, header)
  }

  static async getUserPermission(): Promise<AdminPermissionInterface.Item> {
    const header = { headers: { "access_token": token.token.access_token } }
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/admin_user/get_my_permission`, "GET", {}, header)
    return res.data
  }

}
