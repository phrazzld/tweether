import React from 'react'
import { eth } from '../web3/provider'

export default class IndexPage extends React.Component {

  async componentDidMount() {
    try {
      // Prompt user to let our dapp access their addresses
      await ethereum.enable()
      // Get user's ETH addresses
      const addresses = await eth.getAccounts()
      console.log("addresses:", addresses)
      const balance = await eth.getBalance(addresses[0])
      console.log("balance:", balance)
    } catch (err) {
      console.error("User denied access to their ETH addresses")
    }
  }

  render() {
    return (
      <h1>Hello, World!</h1>
    )
  }
}
