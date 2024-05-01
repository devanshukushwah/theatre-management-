package org.theatremanagement.show.DAO;

import org.theatremanagement.show.model.Show;

import java.util.List;

public interface ShowDAO {
    public List<Show> getAllShow();

    Show getShowById(Long id);

    public Show save(Show show);

    public void deleteShowById(Long id);

}
