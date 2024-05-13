package org.theatremanagement.show;

import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.theatremanagement.show.mapper.ShowMapper;
import org.theatremanagement.show.model.Show;

import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@MybatisTest
@ActiveProfiles("test")
public class MyBatisMapperTests {

    @Autowired
    ShowMapper showMapper;

    @Test
    @DisplayName("mapper to add new show")
    public void testAddShow() {
        Show show = Show.builder().startTime(new Date()).endTime(new Date()).movieId(1L).movieName("test").build();
        int entry = showMapper.create(show);
        assertTrue(entry > 0);
    }

    @Test
    @DisplayName("mapper to get all show based on filter")
    public void testGetAllShow() {
        assertDoesNotThrow(() -> {
            List<Show> allShows = showMapper.getAllShows(1L, null);
        });
    }

    @Test
    @DisplayName("mapper to delete show by id")
    public void testDeleteShowById() {
        assertDoesNotThrow(() -> {
            showMapper.deleteShowById(1L);
        });
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
