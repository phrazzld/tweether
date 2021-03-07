const UserController = artifacts.require('UserController')
const UserStorage = artifacts.require('UserStorage')
const ContractManager = artifacts.require('ContractManager')

module.exports = (deployer) => {

  deployer.deploy(UserController)
    .then(() => {
      return UserController.deployed()
    })
    .then(userController => {
      userController.setManagerAddress(ContractManager.address)

      return Promise.all([
        ContractManager.deployed(),
        UserStorage.deployed()
      ])
    })
    .then(([manager, storage]) => {
      return Promise.all([
        manager.setAddress("UserController", UserController.address),
        storage.setControllerAddress(UserController.address)
      ])
    })

}
