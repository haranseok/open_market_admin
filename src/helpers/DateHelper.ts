import dayjs from "dayjs";

export class DateHelpers {
  /**
   * 년월일
   * @param timestamp
   * @param lang
   */
  static getDate(timestamp: string, lang?: string) {
    let date = "";
    if (timestamp !== undefined) {
      date = dayjs.unix(Number(timestamp)).format("YYYY-MM-DD");
    } else {
      date = dayjs().format("YYYY-MM-DD");
    }
    return date;
  }

  /**
   * 년월일 시분초
   * @param timestamp
   * @param lang
   */
  static getDateTime(timestamp: string, lang?: string) {
    let date = "";
    if (timestamp !== undefined) {
      date = dayjs.unix(Number(timestamp)).format("YYYY-MM-DD HH:mm:ss");
    } else {
      date = dayjs().format("YYYY-MM-DD");
    }
    return date;
  }
}
