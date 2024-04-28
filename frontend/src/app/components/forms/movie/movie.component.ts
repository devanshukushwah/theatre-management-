import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Movie } from 'src/app/common/interface/Movie';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-form-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  SEPRATOR: string = ',';
  @Input() movie!: Movie;
  @Input() buttonLabel: string = 'Submit';
  @Output() handleSubmitEvent = new EventEmitter<Movie>();
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  addOnBlur = true;

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    this.handleSubmitEvent.emit(this.movie);
  }

  addActor(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add actor
    if (value) {
      if (!this?.movie?.actors) {
        this.movie.actors = [];
      }
      this.movie.actors.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeActor(actor: string): void {
    const index: number = this.movie?.actors?.indexOf(actor) ?? -1;

    if (index >= 0) {
      this.movie?.actors?.splice(index, 1);
    }
  }
}
