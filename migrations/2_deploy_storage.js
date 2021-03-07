const UserStorage = artifacts.require('UserStorage')

module.exports = (deployer) => {
  deployer.deploy(UserStorage)
}
