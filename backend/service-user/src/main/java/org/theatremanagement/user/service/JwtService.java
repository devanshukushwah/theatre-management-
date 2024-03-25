package org.theatremanagement.user.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import org.theatremanagement.user.model.User;

import java.util.HashMap;
import java.util.Map;

public interface JwtService {
    public Boolean validateToken(String token);

    public String generateToken(User user);

}
