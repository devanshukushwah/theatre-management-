import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/common.interface/Movie';

@Component({
  selector: 'app-form-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  SEPRATOR: string = ', ';
  @Input() movie!: Movie;
  @Input() buttonLabel!: string;
  @Output() handleSubmitEvent = new EventEmitter<Movie>();

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    // console.log(this.movie);
    // // const movie = {
    // //   ...this.movie,
    // //   actors: this.actorsString?.split(this.SEPRATOR),
    // // };

    this.handleSubmitEvent.emit(this.movie);
  }
}
