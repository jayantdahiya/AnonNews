const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AnonNews", function () {
    let AnonNews
    let deployer, user1, user2, users
    let URI = "TestingURI"
    let postHash = "TestingPostHash"

    beforeEach(async () =>{
        [deployer, user1, user2, ...users] = await ethers.getSigners();
        const anonNewsFactory = await ethers.getContractFactory("AnonNews");
        AnonNews = await anonNewsFactory.deploy();
    })
    describe('Deployment', async () => {
        it("Should track name and symbol", async function () {
            const name = "AnonNews"
            const symbol = "DAPP"
            expect(await AnonNews.name()).to.equal(name);
            expect(await AnonNews.symbol()).to.equal(symbol);
        });
    })
})