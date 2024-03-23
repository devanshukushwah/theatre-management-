package org.theatremanagement.wallet.DAO;

import org.theatremanagement.wallet.model.Wallet;

import java.util.List;

public interface WalletDAO {

    Wallet getWalletById(Long id);

    public Wallet save(Wallet show);

    Wallet getWalletByUserId(long userId);
}
