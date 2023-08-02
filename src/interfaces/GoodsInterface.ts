import { AtomInterface } from "@/interfaces/AtomInterface";

export namespace GoodsInterface {
  export interface ResponseSchema extends AtomInterface.ResponseBase {
    body?: any;
  }

  export interface ResponseListSchema extends AtomInterface.ResponseBase {
    count: number;
    list: any;
  }
}
