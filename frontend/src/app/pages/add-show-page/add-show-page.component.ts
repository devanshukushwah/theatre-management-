import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/common/interface/Show';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-add-show-page',
  templateUrl: './add-show-page.component.html',
  styleUrls: ['./add-show-page.component.css'],
})
export class AddShowPageComponent implements OnInit {
  show!: Show;
  constructor(private showService: ShowService) {}

  ngOnInit(): void {
    this.clearMovieValues();
  }

  clearMovieValues(): void {
    this.show = {
      id: null,
      startTime: null,
      endTime: null,
      duration: null,
      movie: null,
      totalSeats: -1,
      bookedSeats: 0,
    };
  }

  handleAddShow(show: Show): void {
    // this.movieService.updateMovie(movie).subscribe((res) => {
    //   if (res?.data) {
    //     this.movie = res.data;
    //   }
    // });

    this.showService.addShow(show).subscribe((res) => {
      if (res?.success) {
        this.clearMovieValues();
      }
    });
  }
}