pragma solidity ^0.5.10;

import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import './TweetStorage.sol';

contract TweetController is BaseController {

    function createTweet(uint _userId, string memory _text) public returns(uint) {
        ContractManager _manager = ContractManager(managerAddress);

        address _tweetStorageAddress = _manager.getAddress("TweetStorage");
        TweetStorage _tweetStorage = TweetStorage(_tweetStorageAddress);

        return _tweetStorage.createTweet(_userId, _text);
    }

}
