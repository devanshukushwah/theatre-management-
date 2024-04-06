package org.theatremanagement.movie.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.theatremanagement.movie.DAO.MovieDAO;
import org.theatremanagement.movie.model.Movie;
import org.theatremanagement.movie.service.MovieService;

import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    MovieDAO movieDAO;

    @Override
    public List<Movie> getAllMovie() {
        return movieDAO.getAllMovie();
    }

    @Override
    public Movie getMovie(Long id) {
        return movieDAO.getMovieById(id);
    }

    @Override
    public Movie createMovie(Movie movie) {
        List<Movie> movieByName = movieDAO.findMovieByName(movie.getName());
        if(movieByName.isEmpty()) {
            Movie onlyAttributeMovie = Movie.builder()
                    .name(movie.getName())
                    .duration(movie.getDuration())
                    .actors(movie.getActors())
                    .director(movie.getDirector())
                    .build();
            return this.movieDAO.save(onlyAttributeMovie);
        }
        return null;
    }

    @Override
    public Movie updateMovie(Movie movie) {
        Movie existingMovie = this.movieDAO.getMovieById(movie.getId());
        if(existingMovie != null) {
            existingMovie.setName(movie.getName());
            existingMovie.setDirector(movie.getDirector());
            existingMovie.setDuration(movie.getDuration());
            existingMovie.setActors(movie.getActors());
            return this.movieDAO.save(existingMovie);
        }
        return null;
    }

    @Override
    public boolean deleteMovieById(long id) {
        this.movieDAO.deleteMovieById(id);

        Movie movieById = this.movieDAO.getMovieById(id);

        return movieById == null;
    }

    @Override
    public List<Movie> getMoviesName(String name) {
        return this.movieDAO.getMoviesName(name);
    }
}
