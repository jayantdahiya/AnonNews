const hre = require("hardhat");

async function main() {
  const AnonNews = await hre.ethers.getContractFactory("AnonNews");
  const anonNews = await AnonNews.deploy();

  await anonNews.deployed();

  console.log("AnonNews is deployed to:", anonNews.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });