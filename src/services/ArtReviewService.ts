import { HttpCommunicator } from "@/api/HttpCommunicator";
import { useTokenStore } from '@/stores/TokenStore';
import { ArtReviewInterface } from "@/interfaces/ArtReviewInterface";
import { CommonInterface } from "@/interfaces/CommonInterface";

const token = useTokenStore();

// @ts-ignore
const url = import.meta.env.VITE_API_URL;
const header = { headers: { "access_token": token.token.access_token } }

export class ArtReviewService {
  static async getList(page: number, limit: any, artInfoId: number): Promise<ArtReviewInterface.ResponseListSchema> {
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/review/list?page=${page}&limit=${limit}&art_info_id=${artInfoId}`, "GET", {}, header)
    return res.data
  }

  static async getOneInfoById(id: any): Promise<ArtReviewInterface.Item> {
    const res: any = await HttpCommunicator.exec(url + `/api/v1/admin/art/review/get_one?id=${id}`, "GET", {}, header)
    return res.data
  }

  static async doDeleteById(id: any): Promise<CommonInterface.ResponseBase> {
    return await HttpCommunicator.exec(url + `/api/v1/admin/art/review/delete`, "POST", { id: id }, header)
  }

}
