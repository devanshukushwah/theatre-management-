package org.theatremanagement.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.theatremanagement.user.constant.ApplicationConstant;
import org.theatremanagement.user.model.User;
import org.theatremanagement.user.model.domain.CustomResponse;
import org.theatremanagement.user.service.UserService;

import java.util.List;

@RestController
@RequestMapping(value = ApplicationConstant.MAPPING_USER)
public class UserController extends BaseController {

    @Autowired
    UserService userService;

    @GetMapping(ApplicationConstant.STRING_ALL)
    ResponseEntity<CustomResponse<List<User>>> getAllUser(){
        return getResponseEntityOK(userService.getAllUser());
    }

    @GetMapping
    ResponseEntity<CustomResponse<User>> getUser(@RequestParam(required = true) Long id) {
        User user = userService.getUser(id);
        return getResponseEntityOK(user);
    }

    @PostMapping
    ResponseEntity<CustomResponse<Boolean>> createUser(@RequestBody User user) {
        boolean createResponse = userService.createUser(user);
        return getResponseEntityOK(createResponse);
    }

    @PutMapping
    ResponseEntity<CustomResponse<User>> updateUser(@RequestBody User user) {
        User updatedUser = userService.updateUser(user);
        return getResponseEntityOK(updatedUser);
    }

}
