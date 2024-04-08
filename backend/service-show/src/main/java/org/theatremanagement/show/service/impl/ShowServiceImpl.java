package org.theatremanagement.show.service.impl;

import org.apache.commons.lang.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.theatremanagement.show.DAO.ShowDAO;
import org.theatremanagement.show.external.service.MovieInterface;
import org.theatremanagement.show.model.Movie;
import org.theatremanagement.show.model.Show;
import org.theatremanagement.show.model.domain.CustomResponse;
import org.theatremanagement.show.service.ShowService;

import java.util.Date;
import java.util.List;

@Service
public class ShowServiceImpl implements ShowService {

    @Autowired
    ShowDAO showDAO;

    @Autowired
    MovieInterface movieInterface;

    @Override
    public List<Show> getAllShow() {
        return showDAO.getAllShow();
    }

    @Override
    public Show getShow(Long id) {
        return showDAO.getShowById(id);
    }

    /**
     * Method to process show attributes based on Movie.
     */
    private void processShowForMovie(Show show, Movie movie) {
        show.setMovieName(movie.getName());

        // Calculating show time based on movie duration.
        Date endTime = DateUtils.addMinutes(show.getStartTime(),(int) movie.getDuration());
        show.setEndTime(endTime);


    }

    @Override
    public boolean createShow(Show show) {
        CustomResponse<Movie> movieResponse = movieInterface.getMovie(show.getMovieId()).getBody();
        Movie movie =  movieResponse.getData();
        if(show != null && movie != null) {
            Show onlyAttributeShow = new Show();
            onlyAttributeShow.setStartTime(show.getStartTime());;
            onlyAttributeShow.setTotalSeats(show.getTotalSeats());
            onlyAttributeShow.setBookedSeats(show.getBookedSeats());
            onlyAttributeShow.setMovieId(show.getMovieId());
            processShowForMovie(onlyAttributeShow, movie);
            Show save = showDAO.save(onlyAttributeShow);
            return save.getId() > 0L;
        }
        return false;
    }

    @Override
    public Show updateShow(long id, Show show) {
        Show existingShow = showDAO.getShowById(id);
        CustomResponse<Movie> movieResponse = movieInterface.getMovie(show.getMovieId()).getBody();
        Movie movie =  movieResponse.getData();
        if(existingShow != null && movie != null) {
            existingShow.setStartTime(show.getStartTime());
            existingShow.setTotalSeats(show.getTotalSeats());
            existingShow.setBookedSeats(show.getBookedSeats());
            existingShow.setMovieId(show.getMovieId());
            processShowForMovie(existingShow, movie);
            return showDAO.save(existingShow);
        }
        return null;
    }
}
