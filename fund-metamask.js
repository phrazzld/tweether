const recipient = "0xe825E864Fb423C6bE5E52dDe0Ac16380fc978D59";
const amount = web3.utils.toWei("50", "ether");

module.exports = async function (callback) {
  const addresses = await web3.eth.getAccounts();

  web3.eth.sendTransaction(
    {
      from: addresses[1],
      to: recipient,
      value: amount,
    },
    callback
  );
};
