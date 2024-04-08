package org.theatremanagement.show.external.service;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.theatremanagement.show.model.Movie;
import org.theatremanagement.show.model.domain.CustomResponse;

@FeignClient(value = "SERVICE-MOVIE")
public interface MovieInterface {
    @GetMapping("/api/v1/movies/{id}")
    ResponseEntity<CustomResponse<Movie>> getMovie(@PathVariable Long id);
}
