// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract AnonNews {
    uint256 postCounts;
    

    event NewPosted(address indexed from, uint256 timestamp, string message);

    struct Post {
        address voter;
        string message;
        uint256 timestamp;
    }

    Post[] posts;

    constructor() {
        console.log("This is the smart contract for AnonNews");
    }

    function newPost(string memory _message) public {
        postCounts += 1;
        console.log("%s voted w/ message %s", msg.sender, _message);
        posts.push(Post(msg.sender, _message, block.timestamp));
        emit NewPosted(msg.sender, block.timestamp, _message);
    }
    
    function getPostCounts() public view returns (uint256){
        return postCounts;
    }
    
    function getAllPosts() public view returns (Post[] memory) {
        return posts;
    }
    
}

