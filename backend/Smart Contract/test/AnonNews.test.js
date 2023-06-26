const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AnonNews", function () {
    let AnonNews
    let deployer, user1, user2, users
    let mediaUrl = "Testing media Url"

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
    describe('Posting News', async () => {
        it("Should post the first news", async function () {
            await expect(AnonNews.connect(user1).postNews(mediaUrl))
            .to.emit(AnonNews, "NewsPosted")
            .withArgs(
                0,
                user1.address,
                mediaUrl,
                0
            )
            const post = await AnonNews.posts(0)
            expect(post.id).to.equal(0)
            expect(post.author).to.equal(user1.address)
            expect(post.mediaUrl).to.equal(post.mediaUrl)
            expect(post.votes).to.equal(0);
        })
    })
    describe('Voting a news', async() => {
        it("Should vote the post made by a user", async function() {
            await expect(AnonNews.connect(user1).postNews(mediaUrl))
              .to.emit(AnonNews, "NewsPosted")
              .withArgs(0, user1.address, mediaUrl, 0);
            
            const amount = ethers.utils.parseEther('1')
            await expect(AnonNews.connect(user2).voteNews(0, {value: amount}))
            .to.emit(AnonNews, "NewsVoted")
            .withArgs(
                0,
                user1.address,
                mediaUrl,
                1
            )

            await expect(
              AnonNews.connect(user2).voteNews(3)
            ).to.be.revertedWith("Invalid post id");

            await expect(
                AnonNews.connect(user1).voteNews(0)
            ).to.be.revertedWith("Cannot vote your own post");
        });
    })
    describe("Getter function", function () {
        beforeEach(async function() {
            await AnonNews.connect(user1)
            await AnonNews.postNews(mediaUrl)
            await AnonNews.connect(user2)
            await AnonNews.postNews(mediaUrl)
        })

        it("getAllNews should fetch all news", async function(){
            const allPosts = await AnonNews.getAllNews()
            expect(allPosts.length).to.equal(2)
        });
    })
})