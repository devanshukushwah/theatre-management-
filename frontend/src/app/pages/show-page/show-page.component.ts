import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GenericTable } from 'src/app/common/interface/GenericTable';
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
  shows: any[] = [];
  pastShows: Show[] = [];
  inProgressShows: Show[] = [];

  showTableConfig: GenericTable[] = [
    {
      name: 'Movie Name',
      ref: 'movieName',
      order: 1,
      width: '1f',
    },
    {
      name: 'Duration',
      ref: 'duration',
      order: 2,
      width: '10%',
    },
    {
      name: 'Start Time',
      ref: 'startTime',
      order: 3,
      width: '20%',
    },
    {
      name: 'End Time',
      ref: 'endTime',
      order: 4,
      width: '20%',
    },
  ];

  displayedColumns: string[] = [
    'movieName',
    'duration',
    'startTime',
    'endTime',
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

  formShowTableData(show: Show[]): any[] {
    return show.map((item) => {
      return {
        ...item,
        startTime: this.dateUtil.getDateAndTime(item.startTime),
        endTime: this.dateUtil.getDateAndTime(item.endTime),
        duration:
          this.dateUtil.getTimeDifferenceInMinutes(
            item.endTime,
            item.startTime
          ) + ' min',
        status: item.status === 'Available' ? 'Book Now' : item.status,
        bookNowDisabled: item.status === 'Booked',
      };
    });
  }

  getAllShow(): void {
    const params: HttpParams = new HttpParams().set(
      'show-status',
      'not-started'
    );
    this.showService.getAllFilterShow(params).subscribe((res) => {
      if (res?.data) {
        this.shows = this.formShowTableData(res.data);
      }
    });
  }

  getAllPastShow(): void {
    const params: HttpParams = new HttpParams().set('show-status', 'completed');
    this.showService.getAllFilterShow(params).subscribe((res) => {
      if (res?.data) {
        this.pastShows = this.formShowTableData(res.data);
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
        this.inProgressShows = this.formShowTableData(res.data);
      }
    });
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
