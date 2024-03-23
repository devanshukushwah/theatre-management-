package org.theatremanagement.wallet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.theatremanagement.wallet.constant.ApplicationConstant;
import org.theatremanagement.wallet.exception.WalletAlreadyExistException;
import org.theatremanagement.wallet.exception.WalletNotFoundException;
import org.theatremanagement.wallet.exception.WalletNotHaveEnoughBalanceException;
import org.theatremanagement.wallet.model.Wallet;
import org.theatremanagement.wallet.model.domain.CustomResponse;
import org.theatremanagement.wallet.service.WalletService;

@RestController
@RequestMapping(value = ApplicationConstant.REST_V1_SHOW)
public class WalletController extends BaseController {

    @Autowired
    WalletService walletService;

    @GetMapping
    ResponseEntity<CustomResponse> getWallet(@RequestParam(required = true) Long id) {
        Wallet wallet = walletService.getWallet(id);
        return getResponseEntityOK(wallet);
    }

    @PostMapping
    ResponseEntity<CustomResponse> createWallet(@RequestParam("userId") long userId) throws WalletAlreadyExistException {
        boolean createResponse = walletService.createWallet(userId);
        return getResponseEntityOK(createResponse);
    }

    @PutMapping(value = ApplicationConstant.ADD_BALANCE)
    ResponseEntity<CustomResponse> addBalance(@RequestParam("walletId") long walletId, @RequestParam("balance") long balance) throws WalletNotFoundException {
        boolean updatedWallet = walletService.addBalance(walletId, balance);
        return getResponseEntityOK(updatedWallet);
    }


    @PutMapping(value = ApplicationConstant.DEDUCT_BALANCE)
    ResponseEntity<CustomResponse> deductBalance(@RequestParam("walletId") long walletId, @RequestParam("balance") long balance) throws WalletNotFoundException, WalletNotHaveEnoughBalanceException {
        boolean updatedWallet = walletService.deductBalance(walletId, balance);
        return getResponseEntityOK(updatedWallet);
    }

}
