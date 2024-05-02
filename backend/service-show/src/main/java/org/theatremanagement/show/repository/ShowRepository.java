package org.theatremanagement.show.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.theatremanagement.show.model.Show;

import java.util.List;

@Repository
public interface ShowRepository extends JpaRepository<Show, Long> {

    @Query(value = "SELECT s.id, s.start_time, s.end_time, s.movie_id, s.movie_name, s.total_seats, s.booked_seats, CASE WHEN(bs.id IS NOT NULL) THEN TRUE ELSE FALSE END as user_booked FROM shows s LEFT JOIN book_shows bs ON bs.show_id = s.id AND bs.user_id = :user_id", nativeQuery = true)
    List<Show> findAllShowsByUserId(@Param("user_id") long userId);
}
