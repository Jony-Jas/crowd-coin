const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "develop that promote stuff snack update inspire member source broken uniform rapid",
  "https://goerli.infura.io/v3/6af6a61db9fe410285d5ea697f92eace"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);

  const res = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed on", res.options.address);
  provider.engine.stop();
};
deploy();
// 0xf4477B4E8aFF1aDFe1b70A0CBD31cE0B607c2804
