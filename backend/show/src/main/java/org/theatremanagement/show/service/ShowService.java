package org.theatremanagement.show.service;

import org.theatremanagement.show.model.Show;

import java.util.List;

public interface ShowService {
    public List<Show> getAllShow();

    public Show getShow(Long id);

    public boolean createShow(Show show);

    public Show updateShow(Show show);
}

