import { BookShow } from './BookShow';
import { Movie } from './Movie';
import { Show } from './Show';

export interface BookDetail {
  show: Show;
  movie: Movie;
  bookShow: BookShow;
}
