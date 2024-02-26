package org.theatremanagement.user.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="USERS")
public class User {

    @Id
    @GeneratedValue
    private long id;
    private String firstName;
    private String lastName;
    private int age;
    private Gender gender;
    private long phoneNumber;
    private String role;
}
