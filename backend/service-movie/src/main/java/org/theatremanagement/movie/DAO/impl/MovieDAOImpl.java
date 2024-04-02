package org.theatremanagement.movie.DAO.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.theatremanagement.movie.DAO.MovieDAO;
import org.theatremanagement.movie.model.Movie;
import org.theatremanagement.movie.repository.MovieRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MovieDAOImpl implements MovieDAO {

    @Autowired
    MovieRepository movieRepository;

    @Override
    public List<Movie> getAllMovie() {
        return this.movieRepository.findAll();
    }

    @Override
    public Movie getMovieById(Long id) {
        Optional<Movie> byId = movieRepository.findById(id);
        return byId.isPresent() ? byId.get() : null;
    }

    @Override
    public Movie save(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public List<Movie> findMovieByName(String name) {
        return this.movieRepository.findByName(name);
    }

    @Override
    public void deleteMovieById(long id) {
        this.movieRepository.deleteById(id);
    }
}
