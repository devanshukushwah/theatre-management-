package org.theatremanagement.show.service;

import org.theatremanagement.show.model.Show;

import java.util.List;
import java.util.Map;

public interface ShowService {
    public List<Show> getAllShow(Long userId);

    public List<Show> getAllFilterShow(Long userId, Map<String, Object> params);

    public Show getShow(Long id);

    public boolean createShow(Show show);

    public Show updateShow(long id, Show show);

    public boolean deleteShow(Long id);
}

