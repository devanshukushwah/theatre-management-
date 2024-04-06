package org.theatremanagement.movie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.theatremanagement.movie.model.Movie;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    List<Movie> findByName(String name);

    @Query("SELECT new org.theatremanagement.movie.model.Movie(m.id, m.name) FROM Movie m WHERE m.name ILIKE %:keyword%")
    List<Movie> findIdAndNameByKeyword(@Param("keyword") String keyword);
}
