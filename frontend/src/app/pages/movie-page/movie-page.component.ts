import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/common.interface/Movie';
import { CredentialsService } from 'src/app/services/credentials.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  movies!: Movie[];

  constructor(
    private movieService: MovieService,
    private credService: CredentialsService
  ) {}

  ngOnInit(): void {
    this.movies = [];
    this.movieService.getAllMovies().subscribe((res) => {
      console.log(res);
      this.movies = res?.data || [];
    });
  }

  adminControl(): boolean {
    return this.credService.adminControl();
  }
}
