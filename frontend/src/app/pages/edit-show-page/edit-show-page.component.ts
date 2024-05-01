import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/common/interface/Show';
import { MovieService } from 'src/app/services/movie.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-edit-show-page',
  templateUrl: './edit-show-page.component.html',
  styleUrls: ['./edit-show-page.component.css'],
})
export class EditShowPageComponent implements OnInit {
  show!: Show;
  constructor(
    private showService: ShowService,
    private activeRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.clearMovieValues();
    const paramId = this.activeRoute.snapshot.paramMap.get('id');
    if (paramId) this.getShowInfoById(paramId);
  }

  clearMovieValues(): void {
    this.show = {
      startTime: null,
      endTime: null,
      duration: null,
      movieName: null,
      totalSeats: -1,
      bookedSeats: -1,
    };
  }

  processResponseData(show: Show): Show {
    if (show?.startTime) {
      const startTime = show.startTime;
      const formattedStartTime = this.datePipe.transform(
        startTime,
        'yyyy-MM-ddTHH:mm'
      );

      return { ...show, startTime: formattedStartTime };
    }

    return show;
  }

  getShowInfoById(id: string) {
    if (!id) return;
    this.showService.getShowById(id).subscribe((res) => {
      if (res?.data) {
        this.show = this.processResponseData(res.data);
      }
    });
  }

  handleEditShow(show: Show): void {
    if (!show?.id) return;
    const id = show.id;
    this.showService.updateShow(id, show).subscribe((res) => {
      if (res?.success) {
      }
    });
  }
}
