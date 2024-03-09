package org.theatremanagement.wallet.model.domain;


import lombok.Data;

@Data
//@Builder
public class CustomResponse<T> {
    private boolean success;
    private T data;
    private Object error;
}
