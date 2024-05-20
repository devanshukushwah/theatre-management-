package org.theatremanagement.show.constant;

public enum ApplicationMessage {


    SHOW_UPDATED_SUCCESSFULLY("Show updated successfully"),
    SHOW_CREATED_SUCCESSFULLY("Show created successfully"),

    UNABLE_TO_DELETE_SHOW("Unable to delete show"),
    SHOW_DELETED_SUCCESSFULLY("Show deleted successfully"),
    SHOW_SUCCESSFULLY_BOOKED("Show successfully booked"),
    BOOK_DETAIL_NOT_FOUND("Book detail not found"),
    UNABLE_TO_BOOK_SHOW("Unable to book show");

    private String message;
    ApplicationMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return this.message;
    }
}
