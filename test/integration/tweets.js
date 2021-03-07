const TweetStorage = artifacts.require('TweetStorage')

contract('tweets', () => {

  before(async () => {
    const tweetStorage = await TweetStorage.deployed()
    await tweetStorage.createTweet(1, "Hello, World!")
  })

  it("can get tweet", async () => {
    const storage = await TweetStorage.deployed()

    const tweet = await storage.tweets.call(1)
    const { id, text, userId } = tweet

    assert.equal(parseInt(id), 1)
    assert.equal(text, "Hello, World!")
    assert.equal(parseInt(userId), 1)
  })
})
