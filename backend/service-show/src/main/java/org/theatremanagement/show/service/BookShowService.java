package org.theatremanagement.show.service;

import org.theatremanagement.show.exception.ShowAlreadyBookedException;
import org.theatremanagement.show.exception.ShowSoldOutException;
import org.theatremanagement.show.model.BookDetail;

public interface BookShowService {
    public boolean bookShow(long showId, long userId) throws ShowAlreadyBookedException, ShowSoldOutException;

    public BookDetail getBookDetail(long showId, long userId);
}
