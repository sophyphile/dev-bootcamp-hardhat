const networkConfig = {
    default: {
        name: "goerli",
        linkToken: "0x326c977e6efc84e512bb9c30f76e30c160ed06fb",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
        keyHash: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        vrfCoordinator: "0x2ca8e0c643bde4c2e08ab1fa0da3401adad7734d",
        // vrfWrapper: "0xab18414CD93297B0d12ac29E63Ca20f515b3DB46",
        oracle: "0xCC79157eb46F5624204f47AB42b3906cAA40eaB7",
        jobId: "ca98366cc7314957b8c012c72f05aeeb",
        subscriptionId: "14149",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        automationUpdateInterval: "30",
    },
    5: {
        name: "goerli",
        linkToken: "0x326c977e6efc84e512bb9c30f76e30c160ed06fb",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
        keyHash: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        vrfCoordinator: "0x2ca8e0c643bde4c2e08ab1fa0da3401adad7734d",
        // vrfWrapper: "0xab18414CD93297B0d12ac29E63Ca20f515b3DB46",
        oracle: "0xCC79157eb46F5624204f47AB42b3906cAA40eaB7",
        jobId: "ca98366cc7314957b8c012c72f05aeeb",
        subscriptionId: "14149",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        automationUpdateInterval: "30",
    },
    22255111: {
        name: "hardhat",
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        automationUpdateInterval: "30",
    },
    31337: {
        name: "localhost",
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        automationUpdateInterval: "30",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
    1: {
        name: "mainnet",
        linkToken: "0x514910771af9ca656af840dff83e8264ecf986ca",
        fundAmount: "0",
        automationUpdateInterval: "30",
    },
    11155111: {
        name: "sepolia",
        linkToken: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
        keyHash: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c",
        vrfCoordinator: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
        vrfWrapper: "0xab18414CD93297B0d12ac29E63Ca20f515b3DB46",
        oracle: "0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD",
        jobId: "ca98366cc7314957b8c012c72f05aeeb",
        subscriptionId: "777",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        automationUpdateInterval: "30",
    },
    137: {
        name: "polygon",
        linkToken: "0xb0897686c545045afc77cf20ec7a532e3120e0f1",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
        oracle: "0x0a31078cd57d23bf9e8e8f1ba78356ca2090569e",
        jobId: "12b86114fa9e46bab3ca436f88e1a912",
        fee: "100000000000000",
        fundAmount: "100000000000000",
    },
    80001: {
        name: "mumbai",
        linkToken: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
        ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
        keyHash: "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f",
        vrfCoordinator: "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed",
        vrfWrapper: "0x99aFAf084eBA697E584501b8Ed2c0B37Dd136693",
        oracle: "0x40193c8518BB267228Fc409a613bDbD8eC5a97b3",
        jobId: "ca98366cc7314957b8c012c72f05aeeb",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        automationUpdateInterval: "30",
    },
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}
