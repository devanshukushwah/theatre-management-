import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/common/interface/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-edit-movie-page',
  templateUrl: './edit-movie-page.component.html',
  styleUrls: ['./edit-movie-page.component.css'],
})
export class EditMoviePageComponent implements OnInit {
  movie!: Movie;
  actorString!: string;

  constructor(
    private movieService: MovieService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clearMovieValues();
    const paramId = this.activeRoute.snapshot.paramMap.get('id');
    if (paramId) this.getMovieDetailsById(Number.parseInt(paramId));
  }

  clearMovieValues(): void {
    this.movie = {
      id: null, // Initialize with appropriate default values
      name: null,
      duration: null,
      actors: null,
      director: null,
    };
  }

  getMovieDetailsById(id: number): void {
    this.movieService.getMovieById(id).subscribe((res) => {
      if (res?.data) {
        this.movie = res.data;
      }
    });
  }

  handleEditMovie(movie: Movie): void {
    this.movieService.updateMovie(movie).subscribe((res) => {
      if (res?.data) {
        this.movie = res.data;
      }
    });
  }
}
