// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AnonNews is ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _postCounts;
    
    mapping(uint256 => Post) public posts;
    

    event NewsPosted(
        uint256 id,
        address payable author,
        string mediaUrl,
        uint256 votes
    );

    event NewsVoted(
        uint256 id,
        address payable author,
        string mediaUrl,
        uint256 votes
    );

    struct Post {
        uint256 id;
        address payable author;
        string mediaUrl;
        uint256 votes;
        uint256 timestamp;
    }

    constructor() ERC721("AnonNews", "DAPP") {
        console.log("AnonNews Contract");
    }

    function postNews(string memory mediaUrl) external  {
        uint256 currentCount = _postCounts.current();
        // mint the token
        _safeMint(msg.sender, currentCount);
        // Validate the mediaUrl
        require(bytes(mediaUrl).length > 0, "Media url is required");
        // set the token data
        _setTokenURI(currentCount, mediaUrl);
        // Add post to the contract
        posts[currentCount] = Post(currentCount, payable(msg.sender), mediaUrl, 0, block.timestamp);
         // Increment post count
        _postCounts.increment();
        // Trigger an event
        emit NewsPosted(currentCount, payable(msg.sender), mediaUrl, 0);
    }

    function voteNews(uint256 _id) external payable {
        uint256 currentCount = _postCounts.current();
        // Make sure the post id is valid
        require(_id >= 0 && _id <= currentCount, "Invalid post id");
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
        emit NewsVoted(_id, _post.author, _post.mediaUrl, _post.votes);
    }
    
    // Fetches all the posts
    function getAllNews() external view returns (Post[] memory _posts) {
        uint256 currentCount = _postCounts.current();
        _posts = new Post[] (currentCount);
        for (uint256 i = 0; i < _posts.length; i++) {
            _posts[i] = posts[i + 1];
        }
    }

    // Override Functions

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}