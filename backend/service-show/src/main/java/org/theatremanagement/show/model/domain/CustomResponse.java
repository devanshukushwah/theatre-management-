package org.theatremanagement.show.model.domain;


import lombok.Builder;
import lombok.Data;

@Data
//@Builder
public class CustomResponse<T> {
    private boolean success;
    private T data;
    private String responseMessage;
}
