package org.theatremanagement.show.service;

import org.theatremanagement.show.exception.ShowAlreadyBookedException;
import org.theatremanagement.show.exception.ShowSoldOutException;

public interface BookShowService {
    public boolean bookShow(long showId, long userId) throws ShowAlreadyBookedException, ShowSoldOutException;
}
