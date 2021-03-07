import React from "react";
import { createTweet, getTweetInfo } from "../web3/tweets";
import { createUser, getUserInfo } from "../web3/users";

export default class IndexPage extends React.Component {
  logUser = async () => {
    const userInfo = await getUserInfo(1);
    console.log("userInfo:", userInfo);
  };

  logTweet = async () => {
    const tweetInfo = await getTweetInfo(1);
    console.log("tweetInfo:", tweetInfo);
  };

  createUser = async () => {
    const tx = await createUser("phaedrus");
    console.log("created user:", tx);
  };

  createTweet = async () => {
    const tx = await createTweet("Hello, World!");
    console.log("created tweet:", tx);
  };

  render() {
    return (
      <div>
        <button onClick={this.logUser}>Get user with id 1</button>

        <button onClick={this.createUser}>Create user</button>

        <button onClick={this.logTweet}>Get tweet with id 1</button>

        <button onClick={this.createTweet}>Create tweet</button>
      </div>
    );
  }
}
