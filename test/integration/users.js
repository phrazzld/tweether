const UserStorage = artifacts.require('UserStorage')
const UserController = artifacts.require('UserController')

const utils = require('../utils')
const { assertVMException } = utils

contract('users', () => {
  const username = web3.utils.fromAscii("phaedrus")
  const firstName = web3.utils.fromAscii("Phaedrus")
  const lastName = web3.utils.fromAscii("Raznikov")

  it("can create user with controller", async () => {
    const controller = await UserController.deployed()

    //const username = web3.utils.fromAscii("phaedrus")
    //const tx = await controller.createUser(username)
    const tx = await controller.createUser(
      username,
      firstName,
      lastName,
      "The more you do the more you can do",
      "phraznikov@gmail.com"
    )

    assert.isOk(tx)
  })

  it("can't create user without controller", async () => {
    const storage = await UserStorage.deployed()

    try {
      //const username = web3.utils.fromAscii("phaedrus")
      //await storage.createUser(username)
      await storage.createUser(
        0x0,
        username,
        firstName,
        lastName,
        "The more you do the more you can do",
        "phraznikov@gmail.com"
      )
      // If storage.createUser(username) doesn't fail, force the test to fail
      assert.fail()
    } catch (err) {
      assertVMException(err)
    }
  })

  it("can get user", async () => {
    const storage = await UserStorage.deployed()
    const userId = 1

    // Get the userInfo array
    const userInfo = await storage.profiles.call(userId)

    // Get the username (second element)
    // And remember to convert the hex code to a readable string
    // ... and also remember to trim the null characters
    const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g, '')

    assert.equal(username, "phaedrus")
  })

})
