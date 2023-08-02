import { HttpCommunicator } from "@/api/HttpCommunicator";
import { AtomInterface } from "@/interfaces/AtomInterface";
import { GoodsInterface } from "@/interfaces/GoodsInterface";

const url = import.meta.env.VITE_API_URL;
const header = {};
export class GoodsService {
  static async getGoodsList(
    pagNum: string,
    itemCount: string,
    name?: string,
    start_at?: string,
    end_at?: string
  ): Promise<GoodsInterface.ResponseListSchema> {
    const res = await HttpCommunicator.exec(
      url +
        `/goods_list?p=${pagNum}&itemCount=${itemCount}&name=${name}&start_at=${start_at}&end_at=${end_at}`,
      "get",
      {},
      header
    );
    return res.body;
  }
}
