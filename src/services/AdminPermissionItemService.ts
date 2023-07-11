import { useTokenStore } from '@/stores/TokenStore';
import { HttpCommunicator } from "@/api/HttpCommunicator";
import { CommonInterface } from "@/interfaces/CommonInterface";
import { AdminPermissionItemInterface } from "@/interfaces/AdminPermissionItemInterface";

const token = useTokenStore();

// @ts-ignore
const url = import.meta.env.VITE_API_URL;

export class AdminPermissionItemService {

  static async getList(page: number, limit: any): Promise<AdminPermissionItemInterface.ResponseListSchema> {
    const header = { headers: { "access_token": token.token.access_token } }
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/permission_item/list?page=${page}&limt=${limit}`, "GET", {}, header)
    return res.data
  }

  static async getOneInfoById(id: any): Promise<AdminPermissionItemInterface.Item> {
    const header = { headers: { "access_token": token.token.access_token } }
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/permission_item/get_one?id=${id}`, "GET", {}, header)
    return res.data
  }

  static async doDeleteById(id: any): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/permission_item/delete`, "POST", { id: id }, header)
  }

  static async doUpdateById(id: any, key: string, name: string): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/permission_item/update`, "POST", { id: id, key: key, name: name }, header)
  }

  static async doInsert(key: string, name: string): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/permission_item/create`, "POST", {  key: key, name: name }, header)
  }
}
