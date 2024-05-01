package org.theatremanagement.show.constant;

public enum ApplicationMessage {


    SHOW_UPDATED_SUCCESSFULLY("Show updated successfully"),
    SHOW_CREATED_SUCCESSFULLY("Show created successfully"),

    UNABLE_TO_DELETE_SHOW("Unable to delete show"),
    SHOW_DELETED_SUCCESSFULLY("Show deleted successfully");

    private String message;
    ApplicationMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return this.message;
    }
}
