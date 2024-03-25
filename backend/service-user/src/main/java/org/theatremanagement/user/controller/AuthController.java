package org.theatremanagement.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;
import org.theatremanagement.user.exception.UserAlreadyExistException;
import org.theatremanagement.user.exception.UserNotFoundException;
import org.theatremanagement.user.model.User;
import org.theatremanagement.user.service.JwtService;
import org.theatremanagement.user.service.UserService;

@RestController
@RequestMapping("/rest/v1/auth")
public class AuthController {


    @Autowired
    UserService userService;
    @Autowired
    JwtService jwtService;

    @GetMapping("/generate-token")
    public String getToken(@RequestBody User user) {
        return jwtService.generateToken(user);
    }

    /* Moved to Gateway
    @GetMapping("/validate-token")
    public Boolean validateToken(@RequestParam String token) {
        return jwtService.validateToken(token);
    }*/

    @PostMapping("/create-user")
    public Boolean createUser(@RequestBody User user) throws UserAlreadyExistException {
        return userService.createUser(user);
    }

    /* Moved to generate-token controller
    @GetMapping("/log-in")
    public Boolean logInUser(@RequestBody User user) throws UserNotFoundException {
        return userService.validateEmailAndPassword(user.getEmailAddress(), user.getPassword());
    }*/
}
