package org.theatremanagement.wallet.exception;

public class WalletNotHaveEnoughBalanceException extends Exception {
    static final String message = "Wallet not have enough balance";
    public WalletNotHaveEnoughBalanceException() {
        super(message);
    }

    public WalletNotHaveEnoughBalanceException(String message) {
        super(message);
    }
}
