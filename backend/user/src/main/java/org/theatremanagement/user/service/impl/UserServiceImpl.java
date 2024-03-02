package org.theatremanagement.user.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.theatremanagement.user.DAO.UserDAO;
import org.theatremanagement.user.model.User;
import org.theatremanagement.user.service.UserService;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDAO userDAO;

    @Override
    public List<User> getAllUser() {
        return userDAO.getAllUser();
    }

    @Override
    public User getUser(Long id) {
        return userDAO.getUserById(id);
    }

    @Override
    public boolean createUser(User user) {
        User userExist = userDAO.findByEmailAddress(user.getEmailAddress());
        if(userExist == null) {
            User onlyAttributeUser = User.builder()
                    .emailAddress(user.getEmailAddress())
                    .password(user.getPassword())
                    .build();
            User save = userDAO.save(onlyAttributeUser);
            return save.getId() > 0L;
        }
        return false;
    }

    @Override
    public User updateUser(User user) {
        User existingUser = userDAO.getUserById(user.getId());
        if(existingUser != null) {
            existingUser.setAge(user.getAge());
            existingUser.setGender(user.getGender());
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setPhoneNumber(user.getPhoneNumber());
            existingUser.setRole(user.getRole());
            return userDAO.save(existingUser);
        }
        return null;
    }
}
