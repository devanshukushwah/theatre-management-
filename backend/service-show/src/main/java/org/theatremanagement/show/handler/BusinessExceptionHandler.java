package org.theatremanagement.show.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.theatremanagement.show.model.domain.CustomResponse;

@ControllerAdvice(basePackages = "org.theatremanagement.show.exception")
public class BusinessExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<CustomResponse<Object>> businessExceptionHandler(Exception ex) {
        CustomResponse<Object> response = new CustomResponse<>();
        response.setSuccess(false);
        response.setResponseMessage(ex.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }
}
