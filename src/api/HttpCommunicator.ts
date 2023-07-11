import axios from "axios";
// import { useGlobalStore } from "@/stores/GlobalStore";

// const modal = useGlobalStore();
export class HttpCommunicator {
  static async exec(url: string, method: string, params: any, header: any) {
    try {
      let data: any;
      switch (method.toLowerCase()) {
        case "post":
          data = await axios.post(url, params, header);
          break;
        case "get":
          data = await axios.get(url, header);
          break;
      }
      return data.data;
    } catch (e: any) {
      //   if (e.response.status === 400) {
      //     modal.setModalStatus(
      //       true,
      //       "등록(수정)에 실패했습니다. 다시 시도해주세요."
      //     );
      //   }

      return e.response;
    }
  }
}
