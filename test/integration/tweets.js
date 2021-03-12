const TweetStorage = artifacts.require("TweetStorage");
const TweetController = artifacts.require("TweetController");
const UserController = artifacts.require("UserController");

const utils = require("../utils");
const { assertVMException } = utils;

contract("tweets", () => {
  before(async () => {
    const userController = await UserController.deployed();

    const username = web3.utils.fromAscii("phaedrus");
    const firstName = web3.utils.fromAscii("Phaedrus");
    const lastName = web3.utils.fromAscii("Raznikov");

    await userController.createUser(
      username,
      firstName,
      lastName,
      "The more you do the more you can do",
      "phraznikov@gmail.com"
    );
  });

  it("can't create tweet without controller", async () => {
    const storage = await TweetStorage.deployed();

    try {
      await storage.createTweet(1, "chirp chirp this is a tweet");
      assert.fail();
    } catch (err) {
      assertVMException(err);
    }
  });

  it("can create tweet with controller", async () => {
    const controller = await TweetController.deployed();

    const tx = await controller.createTweet("Hello, World!");

    assert.isOk(tx);
  });

  it("can get tweet", async () => {
    const storage = await TweetStorage.deployed();

    const tweet = await storage.tweets.call(1);
    const { id, text, userId } = tweet;

    assert.equal(parseInt(id), 1);
    assert.equal(text, "Hello, World!");
    assert.equal(parseInt(userId), 1);
  });

  it("can get all tweet IDs from user", async () => {
    const storage = await TweetStorage.deployed()

    const userId = 1
    const ids = await storage.getTweetIdsFromUser.call(userId)

    const expectedTweetId = 1

    assert.isOk(Array.isArray(ids))
    assert.equal(ids[0], expectedTweetId)
  })

  it("can get tweet ID based on index", async () => {
    const storage = await TweetStorage.deployed()

    const tweetId = await storage.tweetIds.call(0)

    assert.equal(tweetId, 1)
  })
});
