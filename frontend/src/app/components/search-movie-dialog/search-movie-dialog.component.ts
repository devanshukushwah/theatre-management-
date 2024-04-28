import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ShowComponent } from '../forms/show/show.component';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/common/interface/Movie';

@Component({
  selector: 'app-search-movie-dialog',
  templateUrl: './search-movie-dialog.component.html',
  styleUrls: ['./search-movie-dialog.component.css'],
})
export class SearchMovieDialogComponent implements OnInit {
  searchMovieName: string = '';
  movieList: Movie[] = [];

  constructor(
    public dialogRef: MatDialogRef<ShowComponent>,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleChange() {
    if (this.searchMovieName.length < 2) return;

    this.movieService.getMoviesName(this.searchMovieName).subscribe((res) => {
      if (res?.data) {
        this.movieList = res.data;
      }
    });
  }

  handleMovieItemClicked(movie: Movie) {
    this.dialogRef.close(movie);
  }
}
