const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AnonNews", function () {
    let AnonNews
    let deployer, user1, user2, users
    let postText = "Testing post"
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
    describe('Uploading Posts', async () => {
        it("Should post the news", async function () {
            await expect(AnonNews.connect(user1).newPost(postText, mediaUrl))
            .to.emit(AnonNews, "NewsPosted")
            .withArgs(
                1,
                user1.address,
                postText,
                mediaUrl,
                0
            )
            const postCount = await AnonNews.getPostCount()
            expect(postCount).to.equal(1);
            const post = await AnonNews.posts(postCount)
            expect(post.id).to.equal(1)
            expect(post.author).to.equal(user1.address)
            expect(post.postText).to.equal(post.postText)
            expect(post.mediaUrl).to.equal(post.mediaUrl)
            expect(post.votes).to.equal(0);

            await expect(
                AnonNews.connect(user1).newPost("", mediaUrl)
            ).to.be.revertedWith("Cannot post an empty post");
        })
    })
    describe('Voting a post', async() => {
        it("Should vote the post made by a user", async function() {
            await AnonNews.connect(user1).newPost(postText, mediaUrl)
            const amount = ethers.utils.parseEther('1')
            
            await expect(AnonNews.connect(user2).postVote(1, {value: amount}))
            .to.emit(AnonNews, "NewsVoted")
            .withArgs(
                1,
                user1.address,
                postText,
                mediaUrl,
                1
            )

            await expect(
                AnonNews.connect(user2).postVote(2)
            ).to.be.revertedWith("Invalid post id");

            await expect(
                AnonNews.connect(user1).postVote(1)
            ).to.be.revertedWith("Cannot vote your own post");
        });
    })
    describe("Getter function", function () {
        beforeEach(async function() {
            await AnonNews.connect(user1)
            await AnonNews.newPost(postText, mediaUrl)
            await AnonNews.connect(user2)
            await AnonNews.newPost(postText, mediaUrl)
        })

        it("getAllPosts should fetch all the posts", async function(){
            const allPosts = await AnonNews.getAllPosts()
            expect(allPosts.length).to.equal(2)
        });
    })
})