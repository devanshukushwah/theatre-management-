package org.theatremanagement.user.DAO.impl;

import org.springframework.stereotype.Repository;
import org.theatremanagement.user.DAO.UserDAO;
import org.theatremanagement.user.model.Gender;
import org.theatremanagement.user.model.User;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserDAOImpl implements UserDAO {
    @Override
    public List<User> getAllUser() {
        List<User> users = new ArrayList<>();
        User firstUser = User.builder()
                .firstName("Devanshu")
                .lastName("Kushwah")
                .age(50)
                .phoneNumber(1234567890)
                .gender(Gender.MALE)
                .build();

        users.add(firstUser);

        return users;
    }
}
