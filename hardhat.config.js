require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
const { API_KEY, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
  // defaultNetwork: "sepolia"
};