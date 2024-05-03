package org.theatremanagement.show.service;

import org.theatremanagement.show.model.Show;

import java.util.List;

public interface ShowService {
    public List<Show> getAllShow(Long userId);

    public Show getShow(Long id);

    public boolean createShow(Show show);

    public Show updateShow(long id, Show show);

    public boolean deleteShow(Long id);
}

