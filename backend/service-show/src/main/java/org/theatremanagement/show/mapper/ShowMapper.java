package org.theatremanagement.show.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.theatremanagement.show.model.Show;

import java.util.List;
import java.util.Map;

@Mapper
public interface ShowMapper {
    public List<Show> getAllShows(@Param("userId") Long userId,
                                  @Param("params") Map<String, Object> params);

    public Show getShowById(@Param("id") Long id);

    public int create(Show show);

    public int update(Show show);

    public int deleteShowById(@Param("id") Long id);
}
