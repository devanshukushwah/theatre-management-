package org.theatremanagement.movie.controller;

import org.springframework.http.ResponseEntity;
import org.theatremanagement.movie.model.domain.CustomResponse;

public class BaseController {
    public ResponseEntity getResponseEntityOK(Object data) {
        CustomResponse response = CustomResponse.builder()
                .success(true)
                .data(data)
                .build();
        return ResponseEntity.ok(response);
    }
}
