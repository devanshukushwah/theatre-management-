package org.theatremanagement.show.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.theatremanagement.show.model.domain.CustomResponse;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<CustomResponse<Object>> exceptionHandler(Exception ex) {
        CustomResponse<Object> response = new CustomResponse<>();
        response.setSuccess(false);
        response.setResponseMessage(ex.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

}
