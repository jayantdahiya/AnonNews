<p align="center">
  <a href="#">
    
  </a>
  <p align="center">
   <img width="150" height="150" src="Assets/Logo/An-grey.PNG" alt="Logo">
  </p>
  <h1 align="center"><b>AnonNews</b></h1>
  <p align="center">
  A decentralised news platform
    <br />
    <a href="https://anon-news.web.app/"><strong>anon-news.web.app »</strong></a>
    <br />
    <br />
  </p>
</p>

<br>

[AnonNews_Landing.webm](https://user-images.githubusercontent.com/31251655/233320666-45978ac2-ab61-44e9-8e7b-9f654f18001a.webm)

<br>

AnonNews is a platform build using the decentralised web technology which helps this application to be censorship free. This application will let users post news and a media related to that news on the blockchain. While other users can vote these news posts, based on the number of votes the news with the maximum number of votes is shown first.


> NOTE: AnonNews is under active development, most of the listed features are still experimental and subject to change.

# Motivation

The main motivation behind this project is to remove under the table business of news platforms that are controlled by the big firms. This has made news a profit making business, which I think is a basic human right to get/know the correct and censor free news about the world.


# Architecture

- `/news`: 
    - The frontend requests `allNews()` from the smart contract on Alchemy Polygon Mumbai chain.
    - The array of `allNews()` is of the following structure: 
      ```json
      {
         "author" : "<public_address_of_author>",
         "id": "<id_of_news>",
         "media": "<IPFS_link_of_news>",
         "timestamp": "<news_timestamp>",
         "votes": "<total_votes>"
       }
       ```
    - Now the frontend fetches news metadata from Infura IPFS from url `news(media)` and the following response is fetched:
      ```json
      {
         "heading": "<heading_of_news>",
         "body": "<body_of_news>",
         "imageUrl": "<IPFS_link_of_image>"
       }
       ```
    - The `response(imageUrl)` payload is used to fetch the image from IPFS.
    - The final array of `news()` used to display all news: 
    ```json
    [ 0: {
      "author": ...,
      "content": ...,
      "heading": ...,
      "id": ...,
      "image": ...,
      "timestamp": ...,
      "votes": ...,
      },
      ...
     ]
     ```
<br>
<img width="1439" alt="PostNews" src="https://user-images.githubusercontent.com/31251655/233317241-a81fc38e-ae15-4ca9-be18-1102c659ef67.png">
<br>

- `/post`
   - Users enters `heading`, `content` and `media` for the news post.
   - The `post(media)` is uploaded to IPFS and the `mediaUrl` is returned.
   - The metadata of the news looks something like this:
    ```json
    { 
       "heading": "<news_headline>",
       "body": "<news_content>",
       "image": "<mediaUrl_from_IPFS>"
    }
    ```
   - Now the above payload is uploaded to the IPFS storage which finally gives us the `newsUrl`.
   - `newsUrl` is now written on the smart contract with function `post(newsUrl)`.
   
<br>

[HowToVote.webm](https://user-images.githubusercontent.com/31251655/233319503-338e3801-8045-43f5-8b53-245924a29b35.webm)

<br>

- `/vote`
   - To vote the `news(id)` is passed to the vote function
   - The voteFunction then interacts with the smart contract and triggers the `voteNews()` function
   - `voteNews()` takes news[id] as param and increaments the votes of the `post[id]` on the smart contract. 

# How to use

> Note: This project is currently on the `Polygon Mumbai Testnet`

- The user would need a `metamask wallet` (recommended) to access the web app. You can head over to this [link](https://metamask.io/) and download the extension for your browser. 
- Create a new account on the metamask wallet. And add Polygon Mumbai chain to your wallet.
<p align="center">
<img height="350" src="Content/Screenshots/Wallet.png">
</p>

- Copy your public address from your wallet and add some test `MATIC` to it by heading over to this [link](https://mumbaifaucet.com/) . Just paste your public address and you'll be good to go.
- Posting a post in this web app will require an ethereum transaction as well as voting a post.
- User can also upload a media (image) with their posts.

<br/>

> Use the web app wisely :)
