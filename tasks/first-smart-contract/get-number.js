const { networkConfig, developmentChains } = require("../../helper-hardhat-config")

task("get-number", "Gets the number value on the contract")
    .addParam("contract", "The address of the contract whose number you want to set.")
    .setAction(async (taskArgs) => {
        const contractAddr = taskArgs.contract
        const networkId = network.name
        const MyFirstSmartContract = await ethers.getContractFactory("MyFirstSmartContract")
        let myFirstSmartContract;

        console.log(`Getting number for contract ${contractAddr} on network ${networkId}`)

        //Get signer information
        const accounts = await ethers.getSigners()
        const signer = accounts[0]

        const code = await signer.provider.getCode(contractAddr);

        if (code === "0x") {
            // contractAddr is not a contract account
            console.log(`The contract with address ${contractAddr} does not exist on chain ${networkId}. Deploying it...`)

            myFirstSmartContract = await MyFirstSmartContract.deploy()
        } else {
            myFirstSmartContract = await new ethers.Contract(
                contractAddr,
                MyFirstSmartContract.interface,
                signer
            )
        }

        await myFirstSmartContract.getNumber().then((data) => {
            console.log(`Number received is ${data}`)
        })
    })

module.exports = {}
