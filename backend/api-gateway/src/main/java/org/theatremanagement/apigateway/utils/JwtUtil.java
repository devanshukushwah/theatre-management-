package org.theatremanagement.apigateway.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import java.security.Key;

public class JwtUtil {

    private static final String SECRET = "7501d72fe1051076f9d3701dd337a77f9f72412a11b6c0898099e3c274989d82";

    private static Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public static boolean validateToken(String token) {
        Jwts.parser().setSigningKey(getSignKey()).build().parseClaimsJws(token);
        return true;
    }

    public static Claims extractClaims(String token) {
        return Jwts.parser()
                .setSigningKey(getSignKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public static String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    public static String extractClaimKey(String token, String fieldName) {
        return String.valueOf(extractClaims(token).get(fieldName));
    }

}
