import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetail } from 'src/app/common/interface/BookDetail';
import { BookShow } from 'src/app/common/interface/BookShow';
import { GenericField } from 'src/app/common/interface/GeneralField';
import { Movie } from 'src/app/common/interface/Movie';
import { Show } from 'src/app/common/interface/Show';
import { DateUtilsService } from 'src/app/common/utility/date-utils.service';
import { RouterService } from 'src/app/services/router.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.css'],
})
export class BookDetailPageComponent implements OnInit {
  bookDetails: GenericField[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private showService: ShowService,
    public dateUtil: DateUtilsService,
    private routerService: RouterService
  ) {
    const paramId = this.activeRoute.snapshot.paramMap.get('id');

    if (paramId) this.getBookDetailById(paramId);
  }

  ngOnInit(): void {}

  handleClose(): void {
    this.routerService.navigateToHome();
  }

  getBookDetailById(id: any): void {
    this.showService.getBookDetailByShowId(id).subscribe((res) => {
      if (res?.data) {
        this.formBookDetail(res.data);
      }
    });
  }

  formBookDetail(bookDetail: BookDetail): void {
    const show: Show = bookDetail.show;
    const movie: Movie = bookDetail.movie;
    const bookShow: BookShow = bookDetail.bookShow;

    const data: GenericField[] = [
      {
        title: 'Movie Name',
        value: movie.name || '',
      },
      {
        title: 'Start Time',
        value: this.dateUtil.getDateAndTime(show.startTime) || '',
      },
      {
        title: 'End Time',
        value: this.dateUtil.getDateAndTime(show.endTime) || '',
      },
      {
        title: 'Booked at',
        value: this.dateUtil.getDateAndTime(bookShow.createdDate) || '',
      },
    ];

    this.bookDetails = data;
  }
}
