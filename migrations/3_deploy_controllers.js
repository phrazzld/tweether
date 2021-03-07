const UserController = artifacts.require('UserController')
const TweetController = artifacts.require('TweetController')

const UserStorage = artifacts.require('UserStorage')
const TweetStorage = artifacts.require('TweetStorage')

module.exports = (deployer) => {

  // Deploy controller contracts together
  deployer.then(async () => {
    await deployer.deploy(UserController)
    await deployer.deploy(TweetController)
  })
  // Get deployed storage contract instances
    .then(() => {
      return Promise.all([
        UserStorage.deployed(),
        TweetStorage.deployed()
      ])
    })
  // Set the controller addresses on both storage contracts
    .then(storageContracts => {
      const [userStorage, tweetStorage] = storageContracts

      return Promise.all([
        userStorage.setControllerAddress(UserController.address),
        tweetStorage.setControllerAddress(TweetController.address)
      ])
    })

}
