import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/common/interface/Show';
import { DateUtilsService } from 'src/app/common/utility/date-utils.service';
import { CredentialsService } from 'src/app/services/credentials.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css'],
})
export class ShowPageComponent implements OnInit {
  shows: Show[] = [];

  displayedColumns: string[] = [
    'movieName',
    'duration',
    'startTime',
    'endTime',
    'seats',
  ];

  constructor(
    public credService: CredentialsService,
    private showService: ShowService,
    public dateUtil: DateUtilsService
  ) {
    if (credService.adminControl()) {
      this.displayedColumns = [
        'movieName',
        'duration',
        'startTime',
        'endTime',
        'seats',
        'operation',
      ];
    }
  }

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

  getSeatInfo(show: Show): string {
    if (show.bookedSeats >= 0 && show.totalSeats >= 0) {
      const remSeats: number = show.totalSeats - show.bookedSeats;
      return remSeats.toString();
    }

    return '';
  }

  handleEditShow(show: Show): void {}
  handleDeleteShow(show: Show): void {}
}
