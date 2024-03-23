package org.theatremanagement.wallet.DAO.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.theatremanagement.wallet.DAO.WalletDAO;
import org.theatremanagement.wallet.model.Wallet;
import org.theatremanagement.wallet.repository.WalletRepository;

import java.util.Optional;

@Repository
public class WalletDAOImpl implements WalletDAO {

    @Autowired
    WalletRepository walletRepository;

    @Override
    public Wallet getWalletById(Long id) {
        Optional<Wallet> byId = walletRepository.findById(id);
        return byId.isPresent() ? byId.get() : null;
    }

    @Override
    public Wallet save(Wallet show) {
        return this.walletRepository.save(show);
    }

    @Override
    public Wallet getWalletByUserId(long userId) {
        return this.walletRepository.findWalletByUserId(userId);
    }
}
