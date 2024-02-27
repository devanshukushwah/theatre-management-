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
    public User getUser(Long id) {
        Optional<User> byId = userRepository.findById(id);
        return byId.isPresent() ? byId.get() : null;
    }

    @Override
    public boolean createUser(User user) {
        User save = this.userRepository.save(user);
        return save.getId() > 0;
    }

    @Override
    public User updateUser(User user) {
        Optional<User> existingUserOptional = userRepository.findById(user.getId());
        if(existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();
            existingUser.setAge(user.getAge());
            existingUser.setGender(user.getGender());
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setPhoneNumber(user.getPhoneNumber());
            existingUser.setRole(user.getRole());
            return userRepository.save(existingUser);
        }
        return null;
    }
}
