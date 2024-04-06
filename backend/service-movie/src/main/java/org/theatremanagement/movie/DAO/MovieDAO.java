package org.theatremanagement.movie.DAO;

import org.theatremanagement.movie.model.Movie;

import java.util.List;

public interface MovieDAO {
    public List<Movie> getAllMovie();

    Movie getMovieById(Long id);

    public Movie save(Movie movie);

    public List<Movie> findMovieByName(String name);

    public void deleteMovieById(long id);

    public List<Movie> getMoviesName(String name);
}
