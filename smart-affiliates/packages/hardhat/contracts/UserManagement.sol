// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserManagement {
    struct SocialMedia {
        string tikTokLink;
        uint256 tikTokFollowers;
        string facebookLink;
        uint256 facebookFollowers;
        string instagramLink;
        uint256 instagramFollowers;
    }

    struct Company {
        string companyName;
        string websiteLink;
    }

    struct User {
        address userAddress;
        string name;
        string username;
        string email;
        string passwordHash;
        string role; // "promoter" or "merchant"
        bool onboarded;
        SocialMedia socialMedia; // For promoters
        Company company; // For merchants
    }

    mapping(address => User) public users;
    uint256 public userCount;

    event UserRegistered(
        address indexed userAddress,
        string role,
        string name,
        string username,
        string email
    );
    
    event UserOnboarded(address indexed userAddress, string role);

    // Register a user
    function registerUser(
        string memory _name,
        string memory _username,
        string memory _email,
        string memory _passwordHash
    ) public {
        require(bytes(_username).length > 0, "Username cannot be empty");
        require(bytes(_email).length > 0, "Email cannot be empty");
        require(bytes(_passwordHash).length > 0, "Password cannot be empty");

        // Ensure the user doesn't already exist
        require(bytes(users[msg.sender].username).length == 0, "User already registered");

        // Create a new user
        users[msg.sender] = User({
            userAddress: msg.sender,
            name: _name,
            username: _username,
            email: _email,
            passwordHash: _passwordHash,
            role: "",
            onboarded: false,
            socialMedia: SocialMedia("", 0, "", 0, "", 0), // Initialize empty for promoter
            company: Company("", "") // Initialize empty for merchant
        });
        userCount++;

        emit UserRegistered(msg.sender, "", _name, _username, _email);
    }

    // Onboard a user as either a promoter or merchant
    function onboardUser(
        string memory _role,
        SocialMedia memory _socialMedia, // Struct for promoter
        Company memory _company // Struct for merchant
    ) public {
        require(bytes(users[msg.sender].username).length > 0, "User not registered");
        require(!users[msg.sender].onboarded, "User already onboarded");

        // Convert _role to bytes32 for comparison
        bytes32 roleHash = keccak256(bytes(_role));
        bytes32 promoterHash = keccak256(bytes("promoter"));
        bytes32 merchantHash = keccak256(bytes("merchant"));

        require(roleHash == promoterHash || roleHash == merchantHash, "Invalid role");

        users[msg.sender].role = _role;

        if (roleHash == promoterHash) {
            users[msg.sender].socialMedia = _socialMedia; // Assign social media info for promoters
        } else if (roleHash == merchantHash) {
            users[msg.sender].company = _company; // Assign company info for merchants
        }

        users[msg.sender].onboarded = true;

        emit UserOnboarded(msg.sender, _role);
    }

    // Fetch user details
    function getUser(address _userAddress) public view returns (User memory) {
        return users[_userAddress];
    }
}

