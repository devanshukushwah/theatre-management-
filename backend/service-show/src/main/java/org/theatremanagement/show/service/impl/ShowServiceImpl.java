package org.theatremanagement.show.service.impl;

import lombok.AllArgsConstructor;
import org.apache.commons.lang.time.DateUtils;
import org.springframework.stereotype.Service;
import org.theatremanagement.show.external.service.MovieInterface;
import org.theatremanagement.show.mapper.ShowMapper;
import org.theatremanagement.show.model.Movie;
import org.theatremanagement.show.model.Show;
import org.theatremanagement.show.model.domain.CustomResponse;
import org.theatremanagement.show.service.ShowService;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class ShowServiceImpl implements ShowService {

    final MovieInterface movieInterface;

    final ShowMapper showMapper;

    @Override
    public List<Show> getAllFilterShow(Long userId, Map<String, Object> params) {
        return this.showMapper.getAllShows(userId, params);
    }

    @Override
    public Show getShow(Long id) {
        return this.showMapper.getShowById(id);
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
            return this.showMapper.create(onlyAttributeShow) > 0;
        }
        return false;
    }

    @Override
    public boolean updateShow(long id, Show show) {
        Show existingShow = this.showMapper.getShowById(id);
        CustomResponse<Movie> movieResponse = movieInterface.getMovie(show.getMovieId()).getBody();
        Movie movie =  movieResponse.getData();
        if(existingShow != null && movie != null) {
            existingShow.setStartTime(show.getStartTime());
            existingShow.setTotalSeats(show.getTotalSeats());
            existingShow.setBookedSeats(show.getBookedSeats());
            existingShow.setMovieId(show.getMovieId());
            processShowForMovie(existingShow, movie);
            return this.showMapper.update(existingShow) > 0;
        }
        return false;
    }

    @Override
    public boolean deleteShow(Long id) {
        return this.showMapper.deleteShowById(id) > 0;
    }
}
