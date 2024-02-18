package org.theatremanagement.user.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class User {
    private String firstName;
    private String lastName;
    private int age;
    private Gender gender;
    private long phoneNumber;

}
