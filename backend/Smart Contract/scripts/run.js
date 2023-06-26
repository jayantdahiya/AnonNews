const main = async () => {
    const owner = await hre.ethers.getSigners();
    const anonNewsFactory = await hre.ethers.getContractFactory("AnonNews");
    const anonNewsContract = await anonNewsFactory.deploy();
    await anonNewsContract.deployed();

    console.log("Contract deployed to:", anonNewsContract.address);
    console.log("Contract deployed by:", owner.address);

    let postCounts;

    // postCounts = await anonNewsContract.getPostCounts();
    // console.log(postCounts);

    let user1 = await anonNewsContract.newPost(
      "This is test message!",
      "www.testingUrl.com",
      "https://placehold.jp/300x150.png"
    );
    await user1.wait();

    let user2 = await anonNewsContract.newPost("This is the new test message!", "testing.com");
    await user2.wait();

    postCounts = await anonNewsContract.getPostCounts();
    console.log(postCounts);

    let allPosts = await anonNewsContract.getAllPosts();
    console.log(allPosts);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();