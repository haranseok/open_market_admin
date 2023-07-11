import { useTokenStore } from '@/stores/TokenStore';
import { HttpCommunicator } from "@/api/HttpCommunicator";
import { CommonInterface } from "@/interfaces/CommonInterface";
import { AdminPermissionItemInterface } from "@/interfaces/AdminPermissionItemInterface";

const token = useTokenStore();

// @ts-ignore
const url = import.meta.env.VITE_API_URL;

export class OpBadWordService {

  static async getList(page: number, limit: any): Promise<AdminPermissionItemInterface.ResponseListSchema> {
    const header = { headers: { "access_token": token.token.access_token } }
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/op/bad_word/list?page=${page}&limit=${limit}`, "GET", {}, header)
    return res.data
  }

  static async getOneInfoById(id: any): Promise<AdminPermissionItemInterface.Item> {
    const header = { headers: { "access_token": token.token.access_token } }
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/op/bad_word/get_one?id=${id}`, "GET", {}, header)
    return res.data
  }

  static async doDeleteById(id: any): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/op/bad_word/delete`, "POST", { id: id }, header)
  }

  static async doUpdateById(id: any, name: string): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/op/bad_word/update`, "POST", { id: id, name: name }, header)
  }

  static async doInsert(name: string): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { "access_token": token.token.access_token } }
    return await HttpCommunicator.exec(url + `/api/v1/admin/op/bad_word/create`, "POST", {  name: name }, header)
  }
}
