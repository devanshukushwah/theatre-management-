package org.theatremanagement.user.exception;

public class UserAlreadyExistException extends Exception{
    static final String message = "User already exists";

    public UserAlreadyExistException() {
        super(message);
    }

    public UserAlreadyExistException(String message) {
        super(message);
    }
}
