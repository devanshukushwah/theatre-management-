package org.theatremanagement.wallet.service;

import org.theatremanagement.wallet.exception.WalletAlreadyExistException;
import org.theatremanagement.wallet.exception.WalletNotFoundException;
import org.theatremanagement.wallet.exception.WalletNotHaveEnoughBalanceException;
import org.theatremanagement.wallet.model.Wallet;

public interface WalletService {

    /**
     * Method to get Wallet by wallet id.
     *
     * @param id WALLET.ID
     * @return Wallet Object
     */
    public Wallet getWallet(Long id);

    /**
     * Method to create <b>zero balance</b> wallet if user is new user.
     *
     * @param userId User microservice USER.ID.
     * @return true if successfully created, or false.
     */
    public boolean createWallet(long userId) throws WalletAlreadyExistException;

    /**
     * Method to add balance to existing user.
     *
     * @param walletId WALLET.ID.
     * @param balance  amount needs to add.
     * @return true if successfully added, or false
     * @throws WalletNotFoundException when wallet not exists.
     */
    public boolean addBalance(long walletId, long balance) throws WalletNotFoundException;

    /**
     * Method to deduct balance to existing user
     *
     * @param walletId WALLET.ID.
     * @param balance  amount which need to deduct.
     * @return true if successfully added, or false
     * @throws WalletNotFoundException             when wallet not exists.
     * @throws WalletNotHaveEnoughBalanceException when wallet balance is less than zero.
     */
    public boolean deductBalance(long walletId, long balance) throws WalletNotFoundException, WalletNotHaveEnoughBalanceException;
}

