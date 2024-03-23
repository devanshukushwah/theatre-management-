package org.theatremanagement.show.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.theatremanagement.show.model.Show;

@Repository
public interface ShowRepository extends JpaRepository<Show, Long> {

}
