import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/common/interface/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie-page',
  templateUrl: './add-movie-page.component.html',
  styleUrls: ['./add-movie-page.component.css'],
})
export class AddMoviePageComponent implements OnInit {
  movie!: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.clearMovieValues();
  }

  clearMovieValues(): void {
    this.movie = {
      name: null,
      duration: null,
      actors: [],
      director: null,
    };
  }

  handleAddMovie(movie: Movie): void {
    if (!movie) return;

    this.movieService.addMovie(movie).subscribe((res) => {
      this.clearMovieValues();
    });
  }
}
