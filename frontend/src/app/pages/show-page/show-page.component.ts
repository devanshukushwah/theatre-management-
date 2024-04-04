import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/common.interface/Show';
import { CredentialsService } from 'src/app/services/credentials.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css'],
})
export class ShowPageComponent implements OnInit {
  shows: Show[] = [];

  constructor(
    public credService: CredentialsService,
    private showService: ShowService
  ) {}

  ngOnInit(): void {
    this.getAllShow();
  }

  getAllShow(): void {
    this.showService.getAllShows().subscribe((res) => {
      if (res?.data) {
        this.shows = res.data;
      }
    });
  }

  getTimeString(timeInMinutes: number): string {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  }

  getDateAndTime(dateAndTime: Date): string {
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

  handleEditShow(show: Show): void {}
  handleDeleteShow(show: Show): void {}
}
