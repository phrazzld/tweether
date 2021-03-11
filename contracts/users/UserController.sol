pragma solidity ^0.5.10;

import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import './UserStorage.sol';

contract UserController is BaseController {

    function createUser(
        bytes32 _username,
        bytes32 _firstName,
        bytes32 _lastName,
        string memory _bio,
        string memory _gravatarEmail
    ) public returns(uint) {
        ContractManager _manager = ContractManager(managerAddress);

        address _userStorageAddress = _manager.getAddress("UserStorage");
        UserStorage _storage = UserStorage(_userStorageAddress);

        // Make sure neither this address nor this username has already been taken
        require(_storage.addresses(msg.sender) == 0);
        require(_storage.usernames(_username) == 0);

        return _storage.createUser(
            msg.sender,
            _username,
            _firstName,
            _lastName,
            _bio,
            _gravatarEmail
        );
    }

}
