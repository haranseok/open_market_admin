export namespace CalendarInterface {
  export interface yearMonthDayType {
    year: number;
    month: number;
    day: number;
  }

  export interface scheduleType {
    time: string;
    detail: string;
  }

  export interface dayInfoType {
    fullDay: string;
    schedule?: scheduleType[];
  }

  export interface dayOfMonthType {
    day?: number | null;
    dayInfo?: dayInfoType;
  }
}
