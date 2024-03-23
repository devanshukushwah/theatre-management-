package org.theatremanagement.wallet.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.theatremanagement.wallet.DAO.WalletDAO;
import org.theatremanagement.wallet.exception.WalletAlreadyExistException;
import org.theatremanagement.wallet.exception.WalletNotFoundException;
import org.theatremanagement.wallet.exception.WalletNotHaveEnoughBalanceException;
import org.theatremanagement.wallet.model.Wallet;
import org.theatremanagement.wallet.service.WalletService;


@Service
public class WalletServiceImpl implements WalletService {

    @Autowired
    WalletDAO walletDAO;

    @Override
    public Wallet getWallet(Long id) {
        return walletDAO.getWalletById(id);
    }

    @Override
    public boolean createWallet(long userId) throws WalletAlreadyExistException {
        // check wallet exist
        Wallet wallet = walletDAO.getWalletByUserId(userId);

        if(wallet != null) {
            throw new WalletAlreadyExistException();
        }

        // if exist create wallet
        wallet = new Wallet();
        wallet.setUserId(userId);
        wallet.setBalance(0);
        Wallet dbWallet = walletDAO.save(wallet);
        return dbWallet.getId() > 0L;
    }

    @Override
    public boolean addBalance(long walletId, long balance) throws WalletNotFoundException {
        // check wallet exist
        Wallet wallet = walletDAO.getWalletById(walletId);

        if(wallet == null) {
            throw new WalletNotFoundException();
        }

        // if exist add balance
        wallet.setBalance(wallet.getBalance() + balance);
        Wallet dbWallet = walletDAO.save(wallet);
        return dbWallet.getId() > 0L;
    }

    @Override
    public boolean deductBalance(long walletId, long balance) throws WalletNotFoundException, WalletNotHaveEnoughBalanceException {
        // check wallet exist
        Wallet wallet = walletDAO.getWalletById(walletId);

        if (wallet == null) {
            throw new WalletNotFoundException();
        }

        // not enough balance
        if (wallet.getBalance() - balance < 0) {
            throw new WalletNotHaveEnoughBalanceException();
        }

        // if exist deduct balance
        wallet.setBalance(wallet.getBalance() - balance);
        Wallet dbWallet = walletDAO.save(wallet);
        return dbWallet.getId() > 0L;
    }
}
