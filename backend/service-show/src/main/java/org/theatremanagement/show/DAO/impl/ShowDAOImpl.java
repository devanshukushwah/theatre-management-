package org.theatremanagement.show.DAO.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.theatremanagement.show.DAO.ShowDAO;
import org.theatremanagement.show.model.Show;
import org.theatremanagement.show.repository.ShowRepository;

import java.util.List;
import java.util.Optional;

@Repository
public class ShowDAOImpl implements ShowDAO {

    @Autowired
    ShowRepository showRepository;

    @Override
    public List<Show> getAllShow() {
        return this.showRepository.findAll();
    }

    @Override
    public Show getShowById(Long id) {
        Optional<Show> byId = showRepository.findById(id);
        return byId.isPresent() ? byId.get() : null;
    }

    @Override
    public Show save(Show show) {
        return this.showRepository.save(show);
    }

    @Override
    public void deleteShowById(Long id) {
         this.showRepository.deleteById(id);
    }
}
