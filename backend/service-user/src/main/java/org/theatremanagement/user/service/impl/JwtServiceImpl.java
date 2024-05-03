package org.theatremanagement.user.service.impl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.theatremanagement.user.model.User;
import org.theatremanagement.user.service.JwtService;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtServiceImpl implements JwtService {

    private static final String SECRET = "7501d72fe1051076f9d3701dd337a77f9f72412a11b6c0898099e3c274989d82";

    private static final long expire = 1000 * 60 * 60 * 24;

    @Autowired
    AuthenticationManager authenticationManager;

    @Override
    public Boolean validateToken(String token) {
        Jws<Claims> claimsJws = validateTokenWithReturn(token);
        return true;
    }

    public Jws<Claims> validateTokenWithReturn(String token) {
        return Jwts.parser().setSigningKey(getSignKey()).build().parseClaimsJws(token);
    }

    @Override
    public String generateToken(User user) {

        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmailAddress(), user.getPassword()));

        if(authenticate.isAuthenticated()) {
            User dbUser = (User)authenticate.getPrincipal();
            Map<String, Object> claims = getClaimUserDetails(dbUser);
            return createToken(claims, user.getEmailAddress());
        } else {
            throw new RuntimeException("Invalid user credentials");
        }
    }

    private Map<String, Object> getClaimUserDetails(User user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getId());
        claims.put("role", user.getRole());
        return claims;
    }

    private String createToken(Map<String, Object> claims, String userName) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userName)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expire))
                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
    }

    private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
