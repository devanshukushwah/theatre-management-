package org.theatremanagement.show.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.theatremanagement.show.DAO.ShowDAO;
import org.theatremanagement.show.model.Show;
import org.theatremanagement.show.service.ShowService;

import java.util.List;

@Service
public class ShowServiceImpl implements ShowService {

    @Autowired
    ShowDAO showDAO;

    @Override
    public List<Show> getAllShow() {
        return showDAO.getAllShow();
    }

    @Override
    public Show getShow(Long id) {
        return showDAO.getShowById(id);
    }

    @Override
    public boolean createShow(Show show) {
        if(show != null) {
            Show onlyAttributeShow = new Show();
            onlyAttributeShow.setStartTime(show.getStartTime());
            onlyAttributeShow.setEndTime(show.getEndTime());
            onlyAttributeShow.setDuration(show.getDuration());
            onlyAttributeShow.setTotalSeats(show.getTotalSeats());
            onlyAttributeShow.setBookedSeats(show.getBookedSeats());
            onlyAttributeShow.setMovie(show.getMovie());
            Show save = showDAO.save(onlyAttributeShow);
            return save.getId() > 0L;
        }
        return false;
    }

    @Override
    public Show updateShow(Show show) {
        Show existingShow = showDAO.getShowById(show.getId());
        if(existingShow != null) {
            existingShow.setStartTime(show.getStartTime());
            existingShow.setEndTime(show.getEndTime());
            existingShow.setDuration(show.getDuration());
            existingShow.setTotalSeats(show.getTotalSeats());
            existingShow.setBookedSeats(show.getBookedSeats());
            existingShow.setMovie(show.getMovie());
            return showDAO.save(existingShow);
        }
        return null;
    }
}
