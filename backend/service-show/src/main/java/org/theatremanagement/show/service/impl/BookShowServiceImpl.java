package org.theatremanagement.show.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.theatremanagement.show.exception.ShowAlreadyBookedException;
import org.theatremanagement.show.model.BookShow;
import org.theatremanagement.show.repository.BookShowRepository;
import org.theatremanagement.show.service.BookShowService;

@Service
@AllArgsConstructor
public class BookShowServiceImpl implements BookShowService {

    final BookShowRepository bookShowRepository;

    @Override
    public boolean bookShow(long showId, long userId) throws ShowAlreadyBookedException {
        if (this.bookShowRepository.findByShowIdAndUserId(showId, userId) != null) {
            throw new ShowAlreadyBookedException();
        }
        BookShow bookShow = BookShow.builder().showId(showId).userId(userId).build();
        BookShow save = this.bookShowRepository.save(bookShow);
        return save.getId() > 0;
    }
}
