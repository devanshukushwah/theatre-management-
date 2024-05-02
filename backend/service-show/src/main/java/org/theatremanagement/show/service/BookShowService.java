package org.theatremanagement.show.service;

import org.theatremanagement.show.exception.ShowAlreadyBookedException;

public interface BookShowService {
    public boolean bookShow(long showId, long userId) throws ShowAlreadyBookedException;
}
