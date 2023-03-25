import './App.css';

import { createContext, useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";
import axios from "axios";

import NavBar from './Components/NavBar';
import News from './Pages/News';
import AboutPage from './Pages/About';
import ProfilePage from './Pages/Profile';
import NewsPost from './Pages/FullPost';
import PostNews from './Pages/Post';
import Landing from './Pages/Landing';
import TermsOfUse from './Pages/TermsOfUse';
import contractABI from "./Utils/AnonNews.json";
import { ConnectButtonCustom } from './Components/ConnectButton';

export const AppContext = createContext();

function App() {
  const { address } = useAccount();
  const [allNews, setAllNews] = useState([]);
  const [loading, setLaoding] = useState(true);

  // Setting up smart contract
  const getContract = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(
      process.env.REACT_APP_CONTRACT_ADDRESS,
      contractABI.abi,
      signer
    );
    return contract;
  };
  // **********

  // Getting all news from smart contract
  const getNews = async () => {
    try {
      var news = await getContract().getAllNews();
      console.log("Fetching news from contract...");
      // cleaning up news
      let cleaned = news?.filter((item) => item.mediaUrl !== "");
      console.log(cleaned);
      let res = Object.keys(news).map((key) => ({
        id: Number(news[key].id),
        media: news[key].mediaUrl,
        author: news[key].author,
        timestamp: new Date(Number(news[key].timestamp) * 1000),
        votes: Number(news[key].votes),
      }));
      getNewsMedia(res);
      console.log("Fetched all news from contract!");
    } catch (error) {
      console.log(error);
    }
  };
  // **********

  const getNewsMedia = async (res) => {
    let arr = [];
    try {
      Object.keys(res).map((key) => { 
        fetch(res[key].media)
          .then((res) => res.json())
          .then((data) => {
            arr.push({
              id: res[key].id,
              author: res[key].author,
              timestamp: res[key].timestamp,
              heading: data.headline,
              content: data.body,
              image: data.media,
              votes: res[key].votes,
            });
          }).then(() => {
            setLaoding(false);
            setAllNews(arr);
          })
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log("All news:", allNews);

  // Setting up ipfs infura
  const projectId = process.env.REACT_APP_INFURA_API_KEY;
  const projectSecret = process.env.REACT_APP_INFURA_API_KEY_SECRET;
  const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
  const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    apiPath: "/api/v0",
    headers: {
      authorization: auth,
    },
  });
  // **********

  return (
    <AppContext.Provider
      value={{
        address,
        client,
        allNews,
        loading,
        setLaoding,
        getNews,
      }}
    >
      <div className="flex w-screen h-screen font-RobotoSlab bg-[#F5F2E8] items-center justify-center">
        <div className='fixed left-0 h-screen'>
          <NavBar />
        </div>
        <div className="fixed top-3 right-3">
          <ConnectButtonCustom />
        </div>
        <div className="mt-16 ml-16">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post" element={<PostNews />} />
            <Route path="/profile/:address" element={<ProfilePage />} />
            <Route path="/NewsPost/:url" element={<NewsPost />} />
            <Route path="/terms" element={<TermsOfUse />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
