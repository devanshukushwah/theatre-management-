package org.theatremanagement.user.DAO;

import org.theatremanagement.user.model.User;

import java.util.List;

public interface UserDAO {
    public List<User> getAllUser();

    User getUserById(Long id);

    public User save(User user);

    public User findByEmailAddress(String email);
}
