package org.theatremanagement.show.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.theatremanagement.show.constant.ApplicationConstant;
import org.theatremanagement.show.model.Show;
import org.theatremanagement.show.model.domain.CustomResponse;
import org.theatremanagement.show.service.ShowService;

import java.util.List;

@RestController
@RequestMapping(value = ApplicationConstant.REST_V1_SHOW)
public class ShowController extends BaseController {

    @Autowired
    ShowService showService;

    @GetMapping(ApplicationConstant.STRING_ALL)
    ResponseEntity<CustomResponse> getAllShow(){
        return getResponseEntityOK(showService.getAllShow());
    }

    @GetMapping
    ResponseEntity<CustomResponse> getShow(@RequestParam(required = true) Long id) {
        Show show = showService.getShow(id);
        return getResponseEntityOK(show);
    }

    @PostMapping
    ResponseEntity<CustomResponse> createShow(@RequestBody Show show) {
        boolean createResponse = showService.createShow(show);
        return getResponseEntityOK(createResponse);
    }

    @PutMapping
    ResponseEntity<CustomResponse> updateShow(@RequestBody Show show) {
        Show updatedShow = showService.updateShow(show);
        return getResponseEntityOK(updatedShow);
    }

}
