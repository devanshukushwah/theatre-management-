import { HttpParams } from '@angular/common/http';
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
  pastShows: Show[] = [];
  inProgressShows: Show[] = [];

  displayedColumns: string[] = [
    'movieName',
    'duration',
    'startTime',
    'endTime',
    'seats',
    'book',
  ];

  constructor(
    public credService: CredentialsService,
    private showService: ShowService,
    public dateUtil: DateUtilsService
  ) {
    if (credService.adminControl()) {
      this.displayedColumns.push('admin');
    }
  }

  ngOnInit(): void {
    this.getAllShow();
    this.getAllPastShow();
    this.getInProgressShow();
  }

  getAllShow(): void {
    const params: HttpParams = new HttpParams().set(
      'show-status',
      'not-started'
    );
    this.showService.getAllFilterShow(params).subscribe((res) => {
      if (res?.data) {
        this.shows = res.data;
      }
    });
  }

  getAllPastShow(): void {
    const params: HttpParams = new HttpParams().set('show-status', 'completed');
    this.showService.getAllFilterShow(params).subscribe((res) => {
      if (res?.data) {
        this.pastShows = res.data;
      }
    });
  }

  getInProgressShow(): void {
    const params: HttpParams = new HttpParams().set(
      'show-status',
      'in-progress'
    );
    this.showService.getAllFilterShow(params).subscribe((res) => {
      if (res?.data) {
        this.inProgressShows = res.data;
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

  handleDeleteShow(show: Show): void {
    if (!show.id) return;

    this.showService.deleteShowById(show.id).subscribe((res) => {
      this.getAllShow();
    });
  }

  handleBookShow(show: Show): void {
    if (!show.id) return;

    this.showService.bookShowById(show.id).subscribe((res) => {
      this.getAllShow();
    });
  }
}
