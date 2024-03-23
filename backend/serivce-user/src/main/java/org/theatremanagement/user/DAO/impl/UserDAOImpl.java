package org.theatremanagement.user.DAO.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.theatremanagement.user.DAO.UserDAO;
import org.theatremanagement.user.model.User;
import org.theatremanagement.user.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    UserRepository userRepository;

    @Override
    public List<User> getAllUser() {
        return this.userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        Optional<User> byId = userRepository.findById(id);
        return byId.isPresent() ? byId.get() : null;
    }

    @Override
    public User save(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public User findByEmailAddress(String email) {
        return this.userRepository.findByEmailAddress(email);
    }
}
