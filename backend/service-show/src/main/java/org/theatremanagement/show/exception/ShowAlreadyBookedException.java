package org.theatremanagement.show.exception;

public class ShowAlreadyBookedException extends Exception {
    static final String message = "Show already booked";

    public ShowAlreadyBookedException() {
        super(message);
    }

    public ShowAlreadyBookedException(String message) {
        super(message);
    }
}
