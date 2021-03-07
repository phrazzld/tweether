pragma solidity ^0.5.10;

contract Owned {
    address public ownerAddress;

    constructor() public {
        ownerAddress = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddress);
        _;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        // The new address cannot be null
        // (address(0) is the same as the empty address 0x0)
        require(_newOwner != address(0));

        ownerAddress = _newOwner;
    }
}
