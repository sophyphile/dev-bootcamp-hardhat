const { ethers, network, run } = require("hardhat")
const {
    VERIFICATION_BLOCK_CONFIRMATIONS,
    networkConfig,
    developmentChains,
} = require("../../helper-hardhat-config")

async function deployMyFirstSmartContract(chainId) {
    //set log level to ignore non errors
    ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)

    const accounts = await ethers.getSigners()
    const deployer = accounts[0]

    const myFirstSmartContractFactory = await ethers.getContractFactory("MyFirstSmartContract")
    const myFirstSmartContract = await myFirstSmartContractFactory.deploy()

    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    await myFirstSmartContract.deployTransaction.wait(waitBlockConfirmations)

    console.log(`MyFirstSmartContract deployed to ${myFirstSmartContract.address} on ${network.name}`)

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await run("verify:verify", {
            address: myFirstSmartContract.address,
            constructorArguments: [],
        })
    }
}

module.exports = {
    deployMyFirstSmartContract,
}