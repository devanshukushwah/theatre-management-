import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/common/interface/Movie';
import { Show } from 'src/app/common/interface/Show';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-form-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  @Input() show!: Show;
  @Output() handleSubmitEvent = new EventEmitter<Show>();
  @Input() buttonLabel: string = 'Submit';
  movieDropdownValues: Movie[] = [];
  isMovieInputDropdown: boolean = false;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  handleSubmit() {
    this.handleSubmitEvent.emit(this.show);
  }

  handleMovieChange() {
    console.log('movie change called');
  }

  handleMovieInputChangeMethod() {
    if (this.show?.movieName && this.show?.movieName?.toString().length < 3) {
      this.isMovieInputDropdown = false;
      this.movieDropdownValues = [];
      return;
    }

    this.isMovieInputDropdown = true;
    const keyword: string = this.show?.movieName ? this.show?.movieName : '';

    if (this.show?.movieName) {
      this.movieService.getMoviesName(keyword).subscribe((res) => {
        if (res?.data) {
          // console.log(res.data);
          this.movieDropdownValues = res.data;
        }
      });
    }
  }

  selectMovie(movie: Movie) {
    this.show.movieName = movie.name;
    this.show.movieId = movie.id;
    this.movieDropdownValues = [];
  }
}
