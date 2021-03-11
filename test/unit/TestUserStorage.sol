pragma solidity ^0.5.10;

import "truffle/Assert.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
    UserStorage userStorage;

    constructor() public {
        userStorage = new UserStorage();
        userStorage.setControllerAddress(address(this));
    }

    function testCreateFirstUser() public {
        uint _expectedId = 1;

        Assert.equal(userStorage.createUser(
            address(0),
            "phaedrus",
            "Phaedrus",
            "Raznikov",
            "The more you do the more you can do",
            "phraznikov@gmail.com"
        ), _expectedId, "Should create user with ID 1");
    }
}
