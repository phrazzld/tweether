pragma solidity ^0.5.10;

import './Owned.sol';

contract BaseStorage is Owned {
    address public controllerAddress;

    modifier onlyController() {
        require(msg.sender == controllerAddress);
        _;
    }

    function setControllerAddress(address _controllerAddress) public onlyOwner {
        controllerAddress = _controllerAddress;
    }
}
