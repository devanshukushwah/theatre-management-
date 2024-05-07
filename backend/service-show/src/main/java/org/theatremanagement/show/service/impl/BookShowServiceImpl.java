package org.theatremanagement.show.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.theatremanagement.show.exception.ShowAlreadyBookedException;
import org.theatremanagement.show.exception.ShowSoldOutException;
import org.theatremanagement.show.model.BookShow;
import org.theatremanagement.show.model.Show;
import org.theatremanagement.show.repository.BookShowRepository;
import org.theatremanagement.show.repository.ShowRepository;
import org.theatremanagement.show.service.BookShowService;

@Service
@AllArgsConstructor
public class BookShowServiceImpl implements BookShowService {

    final BookShowRepository bookShowRepository;

    final ShowRepository showRepository;

    @Override
    public boolean bookShow(long showId, long userId) throws ShowAlreadyBookedException, ShowSoldOutException {
        // check if user trying to book same show again.
        if (this.bookShowRepository.findByShowIdAndUserId(showId, userId) != null) {
            throw new ShowAlreadyBookedException();
        }
        // check if show is sold out.
        Show show = showRepository.getById(showId);
        if(show.getBookedSeats() >= show.getTotalSeats()) {
            throw new ShowSoldOutException();
        }

        // save book show object.
        BookShow bookShow = BookShow.builder().showId(showId).userId(userId).build();
        BookShow bookSave = this.bookShowRepository.save(bookShow);

        // if unsuccessfully saved book show object.
        if (bookSave.getId() < 1) return false;

        // increment book seats by 1.
        show.setBookedSeats(show.getBookedSeats() + 1);
        Show showUpdate = this.showRepository.save(show);

        return showUpdate.getId() > 0;
    }
}
