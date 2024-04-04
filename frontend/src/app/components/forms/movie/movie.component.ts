import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Movie } from 'src/app/common.interface/Movie';

@Component({
  selector: 'app-form-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit, OnChanges {
  SEPRATOR: string = ',';
  @Input() movie!: Movie;
  @Input() buttonLabel!: string;
  @Output() handleSubmitEvent = new EventEmitter<Movie>();
  actorsString: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.movie) {
      this.actorsString = this.movie.actors?.join(this.SEPRATOR);
    }
  }

  handleSubmit() {
    const movie = {
      ...this.movie,
      actors: this.actorsString?.split(this.SEPRATOR),
    };
    console.log(movie);

    this.handleSubmitEvent.emit(movie);
  }
}
