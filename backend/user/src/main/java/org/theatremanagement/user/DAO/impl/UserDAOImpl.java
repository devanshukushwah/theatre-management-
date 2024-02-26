package org.theatremanagement.user.DAO.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.theatremanagement.user.DAO.UserDAO;
import org.theatremanagement.user.model.Gender;
import org.theatremanagement.user.model.User;
import org.theatremanagement.user.repository.UserRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    UserRepository userRepository;

    private static List<User> users = Arrays.asList(User.builder()
            .firstName("Devanshu")
            .lastName("Kushwah")
            .age(50)
            .phoneNumber(1234567890)
            .gender(Gender.MALE)
            .id(21)
            .build());
    @Override
    public List<User> getAllUser() {
        return this.userRepository.findAll();
    }

    @Override
    public User getUser(String id) {
//        Optional<User> first = this.users.stream().filter(f -> f.getId() == id).findFirst();

//        return first.isPresent() ? first.get() : null;
        return null;
    }

    @Override
    public boolean createUser(User user) {
//        return this.users.add(user);
        User save = this.userRepository.save(user);
        return save.getId() > 0;
    }
}
