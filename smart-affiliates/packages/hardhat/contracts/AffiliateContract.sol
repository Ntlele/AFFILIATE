// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AffiliateContract {

    struct Agreement {
        address merchant;
        address promoter;
        string link;
        uint256 payPerClick;
        uint256 totalAmountGenerated;
        uint256 createdAt;
        uint256 endAt;
        bool isActive;
    }

    mapping(uint256 => Agreement) public agreements;
    uint256 public agreementCount;

    event AgreementCreated(uint256 agreementId, address indexed merchant, address indexed promoter, string link, uint256 payPerClick, uint256 createdAt, uint256 endAt);
    event ClickRegistered(uint256 agreementId, address indexed promoter, uint256 amountGenerated);

    function createAgreement(address _promoter, string memory _link, uint256 _payPerClick, uint256 _endAt) public {
        agreementCount++;
        agreements[agreementCount] = Agreement({
            merchant: msg.sender,
            promoter: _promoter,
            link: _link,
            payPerClick: _payPerClick,
            totalAmountGenerated: 0,
            createdAt: block.timestamp,
            endAt: _endAt,
            isActive: true
        });

        emit AgreementCreated(agreementCount, msg.sender, _promoter, _link, _payPerClick, block.timestamp, _endAt);
    }

    function registerClick(uint256 _agreementId) public {
        Agreement storage agreement = agreements[_agreementId];
        require(agreement.isActive, "Agreement is not active");
        require(agreement.promoter == msg.sender, "Only the assigned promoter can register clicks");

        agreement.totalAmountGenerated += agreement.payPerClick;

        emit ClickRegistered(_agreementId, msg.sender, agreement.payPerClick);
    }
}
