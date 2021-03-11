import Link from "next/link";
import React from "react";
import Logotype from "../icons/logotype.svg";
import { getLoggedInUserId, getUserInfo } from "../web3/users";
import { Center } from "./Layout";
import Nav from './Nav'

export default class Header extends React.Component {
  state = {
    loggedIn: false,
    userInfo: {}
  }

  async componentDidMount() {
    const userId = await getLoggedInUserId();

    try {
      const userInfo = await getUserInfo(userId)

      this.setState({
        loggedIn: true,
        userInfo
      })
    } catch (err) {
      console.error("Couldn't find logged in user:", err)
    }
  }

  render() {
    const { loggedIn, userInfo } = this.state

    return (
      <header>
        <Center>
          <Link href="/">
            <a className="logotype">
              <Logotype />
            </a>
          </Link>

            {loggedIn && <Nav userInfo={userInfo} />}
        </Center>

        <style jsx>{`
          header {
            background-color: #ffffff;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
          }
        `}</style>
      </header>
    );
  }
}
