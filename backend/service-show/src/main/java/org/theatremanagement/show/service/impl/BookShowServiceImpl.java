package org.theatremanagement.show.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.theatremanagement.show.exception.ShowAlreadyBookedException;
import org.theatremanagement.show.exception.ShowSoldOutException;
import org.theatremanagement.show.mapper.BookShowMapper;
import org.theatremanagement.show.mapper.ShowMapper;
import org.theatremanagement.show.model.BookShow;
import org.theatremanagement.show.model.Show;
import org.theatremanagement.show.service.BookShowService;

@Service
@AllArgsConstructor
public class BookShowServiceImpl implements BookShowService {

    final ShowMapper showMapper;
    final BookShowMapper bookShowMapper;

    @Override
    public boolean bookShow(long showId, long userId) throws ShowAlreadyBookedException, ShowSoldOutException {
        // check if user trying to book same show again.
        if (this.bookShowMapper.countByShowIdAndUserId(showId, userId) > 0) {
            throw new ShowAlreadyBookedException();
        }
        // check if show is sold out.
        Show show = this.showMapper.getShowById(showId);
        if(show.getBookedSeats() >= show.getTotalSeats()) {
            throw new ShowSoldOutException();
        }

        // save book show object.
        BookShow bookShow = BookShow.builder().showId(showId).userId(userId).build();
        int createCount = this.bookShowMapper.create(bookShow);

        // if unsuccessfully saved book show object.
        if (createCount < 1) return false;

        // increment book seats by 1.
        show.setBookedSeats(show.getBookedSeats() + 1);
        return this.showMapper.update(show) > 0;
    }
}
