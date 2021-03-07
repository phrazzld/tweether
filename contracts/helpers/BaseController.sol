pragma solidity ^0.5.10;

import './Owned.sol';

contract BaseController is Owned {
    address managerAddress;

    function setManagerAddress(address _managerAddress) public onlyOwner {
        managerAddress = _managerAddress;
    }
}
