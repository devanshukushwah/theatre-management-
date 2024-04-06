import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateUtilsService {
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

  constructor() {}
}
