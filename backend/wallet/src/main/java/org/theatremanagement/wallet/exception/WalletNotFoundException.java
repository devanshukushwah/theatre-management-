package org.theatremanagement.wallet.exception;

public class WalletNotFoundException extends Exception {
    static final String message = "Wallet not found";
    public WalletNotFoundException() {
        super(message);
    }

    public WalletNotFoundException(String message) {
        super(message);
    }
}
