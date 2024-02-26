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
    public User getUser(String id) {
        return userDAO.getUser(id);
    }

    @Override
    public boolean createUser(User user) {
        return userDAO.createUser(user);
    }
}
