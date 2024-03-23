package org.theatremanagement.user.exception;

public class UserNotFoundException extends Exception {
    static final String message = "User not found";
    public UserNotFoundException() {
        super(message);
    }

    public UserNotFoundException(String message) {
        super(message);
    }
}
