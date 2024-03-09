package org.theatremanagement.wallet.exception;

public class WalletAlreadyExistException extends Exception{
    static final String message = "Wallet already exists";

    public WalletAlreadyExistException() {
        super(message);
    }

    public WalletAlreadyExistException(String message) {
        super(message);
    }
}
