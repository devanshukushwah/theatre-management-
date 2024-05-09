package org.theatremanagement.show.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.theatremanagement.show.model.BookShow;
import org.theatremanagement.show.model.Show;

import java.util.List;
import java.util.Map;

@Mapper
public interface BookShowMapper {

    public int create(BookShow bookShow);

    public int countByShowIdAndUserId(@Param("showId") Long showId,@Param("userId") Long userId);

}
