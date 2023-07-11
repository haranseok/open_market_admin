import { HttpCommunicator } from "@/api/HttpCommunicator";
import { useTokenStore } from '@/stores/TokenStore';
import { QnaInterface } from "@/interfaces/QnaInterface";
import { CommonInterface } from "@/interfaces/CommonInterface";

const token = useTokenStore();

// @ts-ignore
const url = import.meta.env.VITE_API_URL;
const header = { headers: { "access_token": token.token.access_token } }

export class QnaService {
  static async getArtReviewList(page: number, limit: any): Promise<QnaInterface.ResponseListSchema> {
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/review/list?page=${page}&limit=${limit}`, "GET", {}, header)
    return res.data
  }

  static async getCustomerQNAList(page: number, limit: any, type: number): Promise<QnaInterface.ResponseListSchema> {
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/qna/list?page=${page}&limit=${limit}&group=${type}`, "GET", {}, header)
    return res.data
  }

  static async getOneInfoById(id: any): Promise<QnaInterface.Item> {
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/qna/get_one?id=${id}`, "GET", {}, header)
    return res.data
  }

  static async doDeleteById(id: any): Promise<CommonInterface.ResponseBase> {
    return await HttpCommunicator.exec(url + `/api/v1/admin/qna/delete`, "POST", { id: id }, header)
  }
}
