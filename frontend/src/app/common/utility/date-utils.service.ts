import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateUtilsService {
  constructor() {}

  getTimeString(timeInMinutes: any) {
    const hours: number = Math.floor(timeInMinutes / 60);
    const minutes: number = timeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  }

  getDateAndTime(dateAndTime: any) {
    const currentDate = new Date(dateAndTime);
    const date = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
    const time = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    return `${date} ${time}`;
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
}
