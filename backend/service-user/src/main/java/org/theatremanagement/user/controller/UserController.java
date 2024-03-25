package org.theatremanagement.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.theatremanagement.user.constant.ApplicationConstant;
import org.theatremanagement.user.exception.UserAlreadyExistException;
import org.theatremanagement.user.exception.UserNotFoundException;
import org.theatremanagement.user.model.User;
import org.theatremanagement.user.model.domain.CustomResponse;
import org.theatremanagement.user.service.UserService;

import java.util.List;

@RestController
@RequestMapping(value = ApplicationConstant.MAPPING_REST_V1_USER)
public class UserController extends BaseController {

    @Autowired
    UserService userService;

    @GetMapping("get-all-user")
    ResponseEntity<CustomResponse> getAllUser(){
        return getResponseEntityOK(userService.getAllUser());
    }

    @GetMapping("get-user")
    ResponseEntity<CustomResponse> getUser(@RequestParam(required = true) Long id) {
        User user = userService.getUser(id);
        return getResponseEntityOK(user);
    }

    /* Moved to Auth Controller
    @PostMapping("create-user")
    ResponseEntity<CustomResponse> createUser(@RequestBody User user) throws UserAlreadyExistException {
        boolean createResponse = userService.createUser(user);
        return getResponseEntityOK(createResponse);
    } */

    @PutMapping("update-user")
    ResponseEntity<CustomResponse> updateUser(@RequestBody User user) throws UserNotFoundException {
        User updatedUser = userService.updateUser(user);
        return getResponseEntityOK(updatedUser);
    }

}
