package org.theatremanagement.show.controller;

import org.springframework.http.ResponseEntity;
import org.theatremanagement.show.model.domain.CustomResponse;

public class BaseController {
    public <T> ResponseEntity getResponseEntityOK(T data) {
        CustomResponse<T> response = new CustomResponse<T>();
        response.setSuccess(true);
        response.setData(data);
        return ResponseEntity.ok(response);
    }
}
