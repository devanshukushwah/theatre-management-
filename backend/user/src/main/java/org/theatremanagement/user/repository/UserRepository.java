package org.theatremanagement.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.theatremanagement.user.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    boolean existByEmailAddress(String emailAddress);
}
