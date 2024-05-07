package org.theatremanagement.show.exception;

public class ShowSoldOutException extends Exception {
    static final String message = "Show sold out";

    public ShowSoldOutException() {
        super(message);
    }

    public ShowSoldOutException(String message) {
        super(message);
    }
}
