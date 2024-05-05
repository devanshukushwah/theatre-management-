import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GenericTable } from 'src/app/common/interface/GenericTable';
import { Show } from 'src/app/common/interface/Show';
import { DateUtilsService } from 'src/app/common/utility/date-utils.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  showTableConfig: GenericTable[] = [
    {
      name: 'Movie Name',
      ref: 'movieName',
      order: 1,
    },
    {
      name: 'Duration',
      ref: 'duration',
      order: 2,
    },
    {
      name: 'Start Time',
      ref: 'startTime',
      order: 3,
    },
    {
      name: 'End Time',
      ref: 'endTime',
      order: 4,
    },
  ];

  bookedShow: any[] = [];
  watchedShow: any[] = [];

  constructor(
    private showService: ShowService,
    private dateUtil: DateUtilsService
  ) {}

  ngOnInit(): void {
    this.getUpcomingBookedShow();
    this.getWatchedShow();
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
      };
    });
  }

  getUpcomingBookedShow(): void {
    const params: HttpParams = new HttpParams()
      .set('booked', true)
      .set('show-status', 'not-started');
    this.showService.getAllFilterShow(params).subscribe((res) => {
      if (res?.data) {
        this.bookedShow = this.formShowTableData(res.data);
      }
    });
  }

  getWatchedShow(): void {
    const params: HttpParams = new HttpParams()
      .set('show-status', 'completed')
      .set('booked', true);
    this.showService.getAllFilterShow(params).subscribe((res) => {
      if (res?.data) {
        this.watchedShow = this.formShowTableData(res.data);
      }
    });
  }
}
