import Axios from "axios";
import { HttpCommunicator } from "@/api/HttpCommunicator";
import { useTokenStore } from "@/stores/TokenStore";
import { ArtInterface } from "@/interfaces/ArtInterface";
import { CommonInterface } from "@/interfaces/CommonInterface";

const token = useTokenStore();

// @ts-ignore
const url = import.meta.env.VITE_API_URL;
const header = { headers: { access_token: token.token.access_token } };

export class ArtService {
  static async doInsert(
    name: string,
    status: number,
    artistName: string,
    lifetime: string,
    artName: string,
    material: string,
    sizeWidth: string,
    sizeHeight: string,
    isDetecting: string,
    files: any
  ): Promise<CommonInterface.ResponseBase> {
    const insertHeaders = {
      headers: {
        access_token: token.token.access_token,
        "Content-Type": "multipart/form-data",
      },
    };

    const param = {
      name: name,
      status: status,
      artist_name: artistName,
      lifetime: lifetime,
      art_name: artName,
      material: material,
      size_width: sizeWidth,
      size_height: sizeHeight,
      is_detecting: isDetecting,
      files: files,
    };

    return await HttpCommunicator.exec(
      url + `/api/v1/admin/art/create`,
      "POST",
      param,
      insertHeaders
    );
  }

  static async getArtInfoList(
    page: number,
    limit: any
  ): Promise<ArtInterface.ResponseListSchema> {
    const res: any = await HttpCommunicator.exec(
      url + `/api/v1/admin/art/list?page=${page}&limit=${limit}`,
      "GET",
      {},
      header
    );
    return res.data;
  }

  static async getArtInfoOneById(
    id: any
  ): Promise<ArtInterface.ResponseItemSchema> {
    const res: any = await Axios.get(
      url + `/api/v1/admin/art/get_one?id=${id}`,
      header
    );
    return res.data;
  }

  static async ArtInfoUpdate(
    id: number,
    name: string,
    status: number,
    artistName: string,
    lifetime: string,
    artName: string,
    material: string,
    sizeWidth: string,
    sizeHeight: string,
    isDetecting: string,
    files: any
  ): Promise<ArtInterface.ResponseItemSchema> {
    const updateHeaders = {
      headers: {
        access_token: token.token.access_token,
        "Content-Type": "multipart/form-data",
      },
    };
    const param = {
      id: id,
      name: name,
      status: status,
      artist_name: artistName,
      lifetime: lifetime,
      art_name: artName,
      material: material,
      size_width: sizeWidth,
      size_height: sizeHeight,
      is_detecting: isDetecting,
      files: files,
    };

    return await HttpCommunicator.exec(
      url + `/api/v1/admin/art/update`,
      "POST",
      param,
      updateHeaders
    );
    //   const res: any = await Axios.post(
    //   "http://192.168.0.45:5300" + `/api/v1/admin/art/update`,
    //   { art_info_id: id, status: status },
    //   header
    // );
    // return res.data;
  }

  static async ArtInfoDeleteById(
    id: any
  ): Promise<CommonInterface.ResponseBase> {
    const header = { headers: { access_token: token.token.access_token } };
    return await HttpCommunicator.exec(
      url + `/api/v1/admin/art/delete`,
      "POST",
      { id: id },
      header
    );
  }
}
