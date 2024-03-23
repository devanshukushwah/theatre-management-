package org.theatremanagement.user.controller;

import org.springframework.http.ResponseEntity;
import org.theatremanagement.user.model.domain.CustomResponse;

public class BaseController {
    public <T> ResponseEntity<CustomResponse> getResponseEntityOK(T data) {
        CustomResponse<T> response = new CustomResponse();
        response.setSuccess(true);
        response.setData(data);

        return ResponseEntity.ok(response);
    }
}
