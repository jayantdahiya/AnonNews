const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance:", accountBalance.toString());

  const anonNewsFactory = await hre.ethers.getContractFactory("AnonNews");
  const anonNewsContract = await anonNewsFactory.deploy();
  await anonNewsContract.deployed();
  
  console.log("AnonNews Address: ", anonNewsContract.address);

};

const runMain = async () => {
  try{
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();