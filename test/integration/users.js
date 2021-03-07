const UserStorage = artifacts.require('UserStorage')

contract('users', () => {

  it("can create user", async () => {
    const storage = await UserStorage.deployed()

    const username = web3.utils.fromAscii("phaedrus")
    const tx = await storage.createUser(username)

    assert.isOk(tx)
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
