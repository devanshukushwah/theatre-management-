import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/common/interface/Movie';
import { Show } from 'src/app/common/interface/Show';
import { MovieService } from 'src/app/services/movie.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-add-show-page',
  templateUrl: './add-show-page.component.html',
  styleUrls: ['./add-show-page.component.css'],
})
export class AddShowPageComponent implements OnInit {
  show!: Show;
  constructor(
    private showService: ShowService,
    public movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.clearMovieValues();
  }

  clearMovieValues(): void {
    this.show = {
      startTime: null,
      endTime: null,
      duration: null,
      movieName: null,
      totalSeats: 1,
      bookedSeats: 0,
    };
  }

  handleAddShow(show: Show): void {
    this.showService.addShow(show).subscribe((res) => {
      if (res?.success) {
        this.clearMovieValues();
      }
    });
  }
}
