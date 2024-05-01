import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/common/interface/Movie';
import { CredentialsService } from 'src/app/services/credentials.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  movies!: Movie[];
  editMovieModalData: Movie = {
    id: null, // Initialize with appropriate default values
    name: null,
    duration: null,
    actors: [],
    director: null,
  };

  displayedColumns: string[] = ['name', 'duration', 'actors', 'director'];

  constructor(
    private movieService: MovieService,
    public credService: CredentialsService
  ) {
    if (credService.adminControl()) {
      this.displayedColumns.push('admin');
    }
  }

  ngOnInit(): void {
    this.movies = [];
    this.getAllMovie();
  }

  getAllMovie(): void {
    this.movieService.getAllMovies().subscribe((res) => {
      this.movies = res?.data || [];
    });
  }

  handleUpdateMovie() {
    this.movieService.updateMovie(this.editMovieModalData).subscribe((res) => {
      if (res?.data) {
        this.editMovieModalData = res.data;
        this.getAllMovie();
      }
    });
  }

  handleDeleteMovie(id: number | null | undefined) {
    if (id) {
      this.movieService.deleteMovieById(id).subscribe((res) => {
        if (res?.success) {
          this.getAllMovie();
        }
      });
    }
  }
}
