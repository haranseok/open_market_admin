import { HttpCommunicator } from "@/api/HttpCommunicator";
import { AtomInterface } from "@/interfaces/AtomInterface";
import { GoodsInterface } from "@/interfaces/GoodsInterface";

const url = import.meta.env.VITE_API_URL;
const header = {};
export class GoodsService {
  static async getGoodsList(
    pageNum: number,
    itemCount: string
  ): Promise<GoodsInterface.ResponseListSchema> {
    const res = await HttpCommunicator.exec(
      url + `/goods_list?p=${pageNum}&itemCount=${itemCount}`,
      "get",
      {},
      header
    );
    return res.body;
  }

  static async doDeleteOne(id: number): Promise<AtomInterface.ResponseBase> {
    const deleteHeaders = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await HttpCommunicator.exec(
      url + `/v1/goods/do_delete`,
      "post",
      { id: id },
      deleteHeaders
    );

    return res;
  }
}
