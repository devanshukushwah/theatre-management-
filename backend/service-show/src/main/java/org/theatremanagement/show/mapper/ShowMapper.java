package org.theatremanagement.show.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.Query;
import org.theatremanagement.show.model.Show;

import java.util.List;
import java.util.Map;

@Mapper
public interface ShowMapper {
    public List<Show> getAllShows(@Param("userId") Long userId,
                                  @Param("params") Map<String, Object> params);
}
