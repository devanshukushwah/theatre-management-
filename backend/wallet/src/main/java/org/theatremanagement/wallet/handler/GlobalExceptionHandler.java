package org.theatremanagement.wallet.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.theatremanagement.wallet.model.domain.CustomResponse;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler
    public ResponseEntity<CustomResponse<Object>> handleException(Exception ex) {
        CustomResponse<Object> response = new CustomResponse<>();
        response.setSuccess(false);
        response.setError(ex.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
}
