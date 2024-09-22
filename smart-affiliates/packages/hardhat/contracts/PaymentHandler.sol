// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentHandler {

    struct Agreement {
        address merchant;
        address promoter;
        uint256 totalAmountGenerated;
        bool isActive;
    }

    mapping(uint256 => Agreement) public agreements;

    event PaymentMade(uint256 agreementId, address indexed merchant, address indexed promoter, uint256 amountPaid);

    // Merchant can pay promoter
    function makePayment(uint256 _agreementId) public payable {
        Agreement storage agreement = agreements[_agreementId];
        require(agreement.isActive, "Agreement is not active");
        require(agreement.merchant == msg.sender, "Only the merchant can make payments");
        
        uint256 totalAmount = agreement.totalAmountGenerated;
        require(msg.value == totalAmount, "Insufficient payment amount");

        // Transfer the payment to the promoter
        payable(agreement.promoter).transfer(msg.value);

        // Reset total amount generated after payment
        agreement.totalAmountGenerated = 0;

        emit PaymentMade(_agreementId, msg.sender, agreement.promoter, msg.value);
    }

    // Record payments
    function recordPayment(uint256 _agreementId, uint256 _amount) public {
        agreements[_agreementId].totalAmountGenerated += _amount;
    }
}
