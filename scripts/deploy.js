const { ethers, upgrades } = require("hardhat")

require('dotenv').config()

const { OWNER } = process.env
const { NAME } = process.env
const { SYMBOL } = process.env
const { SUPPLY } = process.env

async function main() {


  const ERC20UpgradableV1 = await ethers.getContractFactory(
    "TokenTemplate"
  );

  console.log("OWNER:", OWNER)
  console.log("NAME:", NAME)
  console.log("SYMBOL:", SYMBOL)
  console.log("OWNER:", OWNER)
  console.log("SUPPLY:", SUPPLY)
  const cap = ethers.parseUnits(SUPPLY, 18)
  console.log("CAP:", cap)
  console.log("Deploying TokenTemplate...")
  const contract = await upgrades.deployProxy(ERC20UpgradableV1, [NAME, SYMBOL, OWNER, cap], {
    initializer: "initialize",
    kind: "transparent",
  })

  await contract.waitForDeployment()
  console.log("TokenTemplate deployed to:", await contract.getAddress())
}

main();