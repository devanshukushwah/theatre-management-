import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateUtilsService {
  constructor(private datePipe: DatePipe) {}

  getTimeString(timeInMinutes: any) {
    const hours: number = Math.floor(timeInMinutes / 60);
    const minutes: number = timeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  }

  /**
   * Method to change date format and timezone
   * Scope - ALL OVER APPLICATION
   * @param dateAndTime
   * @returns
   */
  getDateAndTime(dateAndTime: any) {
    const date = new Date(dateAndTime).toLocaleString();

    // removed milliseconds
    return date.replace(':00 ', ' ');
  }

  getTimeDifferenceInMinutes(date1: any, date2: any): string {
    try {
      // Convert both dates to milliseconds
      const time1 = new Date(date1).getTime();
      const time2 = new Date(date2).getTime();

      // Calculate the difference in milliseconds
      const timeDiff = Math.abs(time2 - time1);

      // Convert the difference from milliseconds to minutes
      const dif: Number = Math.ceil(timeDiff / (1000 * 60)); // 1000 milliseconds in a second, 60 seconds in a minute
      return dif.toString();
    } catch (error) {
      return '';
    }
  }

  /**
   * To change client system date into GMT/UTC Timezone
   */
  dateInterceptor(date: any): any {
    return new Date(date).toISOString();
  }

  /**
   *
   */
  onMinuteChange(callback: any) {
    const checkMinute = () => {
      let firstTime = true;
      const currentSecond = new Date().getSeconds();
      const remainingSeconds = 60 - currentSecond;

      if (!firstTime) {
        callback();
      }
      firstTime = false;
      setTimeout(checkMinute, remainingSeconds * 1000);
    };

    checkMinute();
  }
}
