import Link from "next/link";
import React from "react";
import Logotype from "../icons/logotype.svg";
import { Center } from "./Layout";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Center>
          <Link href="/">
            <a classname="logotype">
              <Logotype />
            </a>
          </Link>
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
