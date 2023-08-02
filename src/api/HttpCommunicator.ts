import axios from "axios";
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
      return e.response;
    }
  }
}
