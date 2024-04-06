package org.theatremanagement.movie.service;

import org.theatremanagement.movie.model.Movie;

import java.util.List;

public interface MovieService {
    public List<Movie> getAllMovie();

    public Movie getMovie(Long id);

    public Movie createMovie(Movie Movie);

    public Movie updateMovie(Movie Movie);

    public boolean deleteMovieById(long id);

    public List<Movie> getMoviesName(String name);
}

