const hre = require("hardhat");

async function main() {
  const AnonNews = await hre.ethers.getContractFactory("AnonNews");
  const anonNews = await AnonNews.deploy();

  await anonNews.deployed();

  console.log("AnonNews is deployed to:", anonNews.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
