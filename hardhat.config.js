require("@nomicfoundation/hardhat-toolbox");

require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()



const { WALLET_PRIVATE_KEY } = process.env;
const { POLYGONSCAN_API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
};
