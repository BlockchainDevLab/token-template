const { ethers } = require("ethers");


async function main() {

    const ADR_TOKEN = "0x1C6A1398A36CD2b5Ae2510F3eCB8029C2e837dCC"
    const ADR_MINT = "0x3F9E5E96b26156541D369e57337881f6BA9Bc6A9"  //"0x279609F03D9624E2Efa18ac5bFEc03be9D56EE9a"
    const TOTAL_MINT = "20000000000000000"
    const ERC20Upgradable = await hre.ethers.getContractFactory("TokenTemplate")
    console.log("Attach TokenTemplate...")
    const contract = await ERC20Upgradable.attach(ADR_TOKEN)
    await contract.mint(ADR_MINT, ethers.parseUnits(TOTAL_MINT, 18))
    console.log("TokenTemplate mint  to:", ADR_MINT)
    console.log("TOTAL  MINT:", TOTAL_MINT)
}

main();