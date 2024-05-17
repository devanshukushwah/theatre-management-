import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/common/interface/Show';
import { GenericField } from 'src/app/common/interface/GeneralField';
import { DateUtilsService } from 'src/app/common/utility/date-utils.service';
import { RouterService } from 'src/app/services/router.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-book-show-page',
  templateUrl: './book-show-page.component.html',
  styleUrls: ['./book-show-page.component.css'],
})
export class BookShowPageComponent implements OnInit {
  show!: Show;
  showFields: GenericField[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private showService: ShowService,
    public dateUtil: DateUtilsService,
    private routerService: RouterService
  ) {
    const paramId = this.activeRoute.snapshot.paramMap.get('id');

    if (paramId) this.getShowById(paramId);
  }

  ngOnInit(): void {}

  getShowById(id: any): void {
    this.showService.getShowById(id).subscribe((res) => {
      if (res?.data) {
        this.show = res.data;
        this.renderFields(res.data);
      }
    });
  }

  renderFields(show: Show): void {
    const data: GenericField[] = [
      {
        title: 'Movie Name',
        value: show.movieName || '',
      },
      {
        title: 'Start Time',
        value: this.dateUtil.getDateAndTime(show.startTime) || '',
      },
      {
        title: 'End Time',
        value: this.dateUtil.getDateAndTime(show.endTime) || '',
      },
    ];

    this.showFields = data;
  }

  handleBookShow(show: Show): void {
    if (!show.id) return;

    this.showService.bookShowById(show.id).subscribe((res) => {
      this.routerService.navigateToShow();
    });
  }
}
