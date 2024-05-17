package org.theatremanagement.show;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.theatremanagement.show.mapper.ShowMapper;
import org.theatremanagement.show.model.Show;
import org.theatremanagement.show.util.DateUtil;

import javax.sql.DataSource;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@MybatisTest
@ActiveProfiles("test")
public class MyBatisMapperTests {

    @Autowired
    ShowMapper showMapper;

    @Autowired
    private DataSource dataSource;

    private void executeQuery(String sql) {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        jdbcTemplate.execute(sql);
    }

    @Test
    @DisplayName("mapper to add new show")
    public void testAddShow() {
        Show show = Show.builder().startTime(new Date()).endTime(new Date()).movieId(1L).movieName("test").build();
        int entry = showMapper.create(show);
        assertTrue(entry > 0);
    }

    @Test
    @DisplayName("mapper to get all show basic test")
    public void testGetAllShow() {
        executeQuery("INSERT INTO MOVIE(id, actors, director, \"name\", duration) values (1, 'test', 'test', 'test', 1)");
        executeQuery("INSERT INTO SHOW(id, start_time, end_time, movie_id) VALUES (1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1)");
        executeQuery("INSERT INTO BOOK_SHOW(id, show_id, user_id) VALUES (1, 1, 1)");

        assertDoesNotThrow(() -> {
            List<Show> shows = showMapper.getAllShows(1L, null);
            assertTrue(shows.size() > 0);
        });
    }

    @Nested
    @DisplayName("mapper to getAllShow test status field")
    class TestStatus{
        @Test
        @DisplayName("status=Ended")
        public void testGetAllShowStatusEnded() {
            executeQuery("INSERT INTO MOVIE(id, actors, director, \"name\", duration) values (1, 'test', 'test', 'test', 1)");
            executeQuery("INSERT INTO SHOW(id, start_time, end_time, movie_id) VALUES (1, '2024-01-12 08:31:00', '2024-01-12 11:31:00', 1)");
            executeQuery("INSERT INTO BOOK_SHOW(id, show_id, user_id) VALUES (1, 1, 1)");

            assertDoesNotThrow(() -> {
                Optional<Show> shows = showMapper.getAllShows(1L, null).stream().findFirst();
                assertTrue(shows.isPresent());

                if(shows.isPresent()) {
                    String status = shows.get().getStatus();
                    assertTrue(status.equalsIgnoreCase("Ended"));
                }
            });
        }

        @Test
        @DisplayName("status=Booked")
        public void testGetAllShowStatusBooked() {
            // Given
            String nextDay = DateUtil.getCurrentTimeAdjustedByDays(1);
            String nextNextDay = DateUtil.getCurrentTimeAdjustedByDays(2);

            String showQuery = String.format("INSERT INTO SHOW(id, start_time, end_time, movie_id) VALUES (1, '%s', '%s', 1)", nextDay, nextNextDay);

            // setup db data
            executeQuery("INSERT INTO MOVIE(id, actors, director, \"name\", duration) values (1, 'test', 'test', 'test', 1)");
            executeQuery(showQuery);
            executeQuery("INSERT INTO BOOK_SHOW(id, show_id, user_id) VALUES (1, 1, 1)");

            assertDoesNotThrow(() -> {
                Optional<Show> shows = showMapper.getAllShows(1L, null).stream().findFirst();
                assertTrue(shows.isPresent());

                if(shows.isPresent()) {
                    String status = shows.get().getStatus();
                    assertTrue(status.equalsIgnoreCase("Booked"));
                }
            });
        }

        @Test
        @DisplayName("status=Available")
        public void testGetAllShowStatusAvailable() {
            // Given
            String nextDay = DateUtil.getCurrentTimeAdjustedByDays(1);
            String nextNextDay = DateUtil.getCurrentTimeAdjustedByDays(2);

            String showQuery = String.format("INSERT INTO SHOW(id, start_time, end_time, movie_id) VALUES (1, '%s', '%s', 1)", nextDay, nextNextDay);

            // setup db data
            executeQuery("INSERT INTO MOVIE(id, actors, director, \"name\", duration) values (1, 'test', 'test', 'test', 1)");
            executeQuery(showQuery);

            assertDoesNotThrow(() -> {
                Optional<Show> shows = showMapper.getAllShows(1L, null).stream().findFirst();
                assertTrue(shows.isPresent());

                if(shows.isPresent()) {
                    String status = shows.get().getStatus();
                    assertTrue(status.equalsIgnoreCase("Available"));
                }
            });
        }
    }


    @Test
    @DisplayName("mapper to delete show by id")
    public void testDeleteShowById() {
        this.executeQuery("INSERT INTO SHOW(id, start_time, end_time, movie_id) VALUES (5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1)");
        int row = showMapper.deleteShowById(5L);
        assertTrue(row > 0);
    }

    @Test
    @DisplayName("mapper to get show by id")
    public void testGetShowById() {
        assertDoesNotThrow(() -> {
            showMapper.getShowById(1L);
        });
    }

    @Test
    @DisplayName("mapper to update show by id")
    public void testUpdateShowById() {
        Show show = Show.builder().startTime(new Date()).endTime(new Date()).movieId(1L).movieName("test").build();
        assertDoesNotThrow(() -> {
            showMapper.update(show);
        });
    }

}
