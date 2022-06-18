// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract AnonNews is ERC721URIStorage {
    uint256 postCount=0;
    mapping(uint256 => Post) public posts;
    

    event NewsPosted(
        uint256 id,
        address payable author,
        string postText,
        string mediaUrl,
        uint256 votes
    );

    event NewsVoted(
        uint256 id,
        address payable author,
        string postText,
        string mediaUrl,
        uint256 votes
    );

    struct Post {
        uint256 id;
        address payable author;
        string postText;
        string mediaUrl;
        uint256 votes;
        uint256 timestamp;
    }

    constructor() ERC721("AnonNews", "DAPP") {
        console.log("This is the smart contract for AnonNews");
    }

    function newPost(string memory _message, string memory mediaUrl) external  {
        // To make sure that post text is not empty
        require(bytes(_message).length > 0, "Cannot post an empty post");
        // Increment post count
        postCount ++;
        // Add post to the contract
        posts[postCount] = Post(postCount, payable(msg.sender), _message, mediaUrl, 0, block.timestamp);
        // Trigger an event
        emit NewsPosted(postCount, payable(msg.sender), _message, mediaUrl, 0);
    }

    function postVote(uint256 _id) external payable {
        // Make sure the post id is valid
        require(_id > 0 && _id <= postCount, "Invalid post id");
        // Fetch the post
        Post memory _post = posts[_id];
        // Make sure author doesn't vote their own post
        require(_post.author != msg.sender, "Cannot vote your own post");
        // Pay the author by sending them Ether
        _post.author.transfer(msg.value);
        // Increment the vote count
        _post.votes++;
        // Update the image
        posts[_id] = _post;
        // Trigger an event
        emit NewsVoted(_id, _post.author, _post.postText, _post.mediaUrl, _post.votes);
    }
    
    function getPostCount() public view returns (uint256){
        return postCount;
    }
    
    // Fetches all the posts
    function getAllPosts() external view returns (Post[] memory _posts) {
        _posts = new Post[] (postCount);
        for (uint256 i = 0; i < _posts.length; i++) {
            _posts[i] = posts[i + 1];
        }
    }
}

