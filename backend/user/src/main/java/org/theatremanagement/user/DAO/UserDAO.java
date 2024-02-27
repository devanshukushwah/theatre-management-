package org.theatremanagement.user.DAO;

import org.theatremanagement.user.model.User;

import java.util.List;

public interface UserDAO {
    public List<User> getAllUser();

    User getUser(Long id);

    boolean createUser(User user);

    public User updateUser(User user);
}
