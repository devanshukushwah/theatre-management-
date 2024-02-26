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

    @GetMapping(ApplicationConstant.GET_ALL_USER)
    ResponseEntity<CustomResponse<List<User>>> getAllUser(){
        return getResponseEntityOK(userService.getAllUser());
    }

    @GetMapping(ApplicationConstant.GET_USER)
    ResponseEntity<CustomResponse<User>> getUser(@RequestParam(required = true) String id) {
        User user = userService.getUser(id);
        return getResponseEntityOK(user);
    }

    @PostMapping(ApplicationConstant.CREATE_USER)
    ResponseEntity<CustomResponse<Boolean>> createUser(@RequestBody User user) {
        boolean createResponse = userService.createUser(user);
        return getResponseEntityOK(createResponse);
    }

}
