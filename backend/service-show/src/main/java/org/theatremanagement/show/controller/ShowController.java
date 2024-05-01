package org.theatremanagement.show.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.theatremanagement.show.constant.ApplicationConstant;
import org.theatremanagement.show.constant.ApplicationMessage;
import org.theatremanagement.show.model.Show;
import org.theatremanagement.show.model.domain.CustomResponse;
import org.theatremanagement.show.service.ShowService;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/shows")
public class ShowController extends BaseController {

    @Autowired
    ShowService showService;

    @GetMapping
    ResponseEntity<CustomResponse> getAllShow(){
        return getResponseEntityOK(showService.getAllShow());
    }

    @GetMapping("{id}")
    ResponseEntity<CustomResponse> getShow(@PathVariable Long id) {
        Show show = showService.getShow(id);
        return getResponseEntityOK(show);
    }

    @PostMapping
    ResponseEntity<CustomResponse> createShow(@RequestBody Show show) {
        boolean createResponse = showService.createShow(show);
        return getResponseEntityOK(createResponse);
    }

    @PutMapping("/{id}")
    ResponseEntity<CustomResponse> updateShow(@PathVariable long id, @RequestBody Show show) {
        Show updatedShow = showService.updateShow(id, show);
        return getResponseEntityOK(updatedShow);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<CustomResponse> deleteShow(@PathVariable long id, @RequestBody Show show) {
        boolean deleteShow = showService.deleteShow(id);
        if (deleteShow) {
            return getResponseEntityOK(true, ApplicationMessage.SHOW_DELETED_SUCCESSFULLY.getMessage());
        } else {
            return getResponseEntityFailed(false, ApplicationMessage.UNABLE_TO_DELETE_SHOW.getMessage());
        }
    }

}
