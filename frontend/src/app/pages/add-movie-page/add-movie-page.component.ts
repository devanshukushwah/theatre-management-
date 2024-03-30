import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/common.interface/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie-page',
  templateUrl: './add-movie-page.component.html',
  styleUrls: ['./add-movie-page.component.css'],
})
export class AddMoviePageComponent implements OnInit {
  movie!: Movie;
  actors!: string;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.clearMovieValues();
  }

  clearMovieValues(): void {
    this.movie = {
      id: null, // Initialize with appropriate default values
      name: null,
      duration: null,
      actors: [],
      director: null,
    };
    this.actors = '';
  }

  handleAddMovie(): void {
    this.movie.actors = this.actors.split(',');
    this.movieService.addMovie(this.movie).subscribe((res) => {
      // console.log(res);
      this.clearMovieValues();
    });
  }
}