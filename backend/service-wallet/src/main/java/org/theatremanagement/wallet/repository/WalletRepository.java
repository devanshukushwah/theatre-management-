package org.theatremanagement.wallet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.theatremanagement.wallet.model.Wallet;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Long> {
    public Wallet findWalletByUserId(long userId);
}
