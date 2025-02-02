package org.theatremanagement.movie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.theatremanagement.movie.constant.ApplicationConstant;
import org.theatremanagement.movie.model.Movie;
import org.theatremanagement.movie.model.domain.CustomResponse;
import org.theatremanagement.movie.service.MovieService;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/movies")
public class MovieController extends BaseController {

    @Autowired
    MovieService movieService;

    @GetMapping
    ResponseEntity<CustomResponse<List<Movie>>> getAllMovie(){
        return getResponseEntityOK(movieService.getAllMovie());
    }

    @GetMapping("/{id}")
    ResponseEntity<CustomResponse<Movie>> getMovie(@PathVariable Long id) {
        Movie Movie = movieService.getMovie(id);
        return getResponseEntityOK(Movie);
    }

    @PostMapping
    ResponseEntity<CustomResponse<Movie>> createMovie(@RequestBody Movie Movie) {
        Movie createResponse = movieService.createMovie(Movie);
        return getResponseEntityOK(createResponse);
    }

    @PutMapping
    ResponseEntity<CustomResponse<Movie>> updateMovie(@RequestBody Movie movie) {
        Movie updatedMovie = movieService.updateMovie(movie);
        return getResponseEntityOK(updatedMovie);
    }

    @DeleteMapping
    ResponseEntity<CustomResponse<Boolean>> updateMovie(@RequestParam long id) {
        boolean deleteMovieById = movieService.deleteMovieById(id);
        return getResponseEntityOK(deleteMovieById);
    }

    @GetMapping("/get-movies-name")
    ResponseEntity<CustomResponse<Movie>> getMoviesName(@RequestParam("name") String name) {
         List<Movie> movies = this.movieService.getMoviesName(name);
         return getResponseEntityOK(movies);
    }

}
