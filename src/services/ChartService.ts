import Axios from 'axios'

// @ts-ignore
const url = import.meta.env.VITE_API_URL;

export class ChartService {

  /**
   * 차트 리스트 가져오기
   *
   * @param aryInfoId
   */
  static async getFaceTotal(aryInfoId:any) {
    const data: any = await Axios.get( url + '/api/v1/admin/art/detecting/sta?art_info_id=' + aryInfoId, {})
    return data.data
  }

}
