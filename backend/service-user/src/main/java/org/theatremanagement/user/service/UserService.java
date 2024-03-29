package org.theatremanagement.user.service;

import org.theatremanagement.user.exception.UserAlreadyExistException;
import org.theatremanagement.user.exception.UserNotFoundException;
import org.theatremanagement.user.model.User;

import java.util.List;

public interface UserService {
    public List<User> getAllUser();

    public User getUser(Long id);

    public User getUser(String emailAddress);

    public boolean createUser(User user) throws UserAlreadyExistException;

    public User updateUser(User user) throws UserNotFoundException;

    Boolean validateEmailAndPassword(String emailAddress, String password) throws UserNotFoundException;

    User getUserByEmailAddress(String emailAddress);
}

