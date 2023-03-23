import './App.css';

import { createContext, useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";

import NavBar from './Components/NavBar';
import News from './Pages/News';
import AboutPage from './Pages/AboutPage';
import ProfilePage from './Pages/ProfilePage';
import NewsPost from './Pages/FullNewsPost';
import PostNews from './Pages/Post';
import Landing from './Pages/Landing';
import TermsOfUse from './Pages/TermsOfUse';
import contractABI from "./Utils/AnonNews.json";
import { ConnectButtonCustom } from './Components/ConnectButton';

export const AppContext = createContext();

function App() {
  const { address } = useAccount();
  const [allNews, setAllNews] = useState({});

  // Setting up smart contract
  const getContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
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
      let news = await getContract().getAllNews();
      console.log('Fetching news from contract...')
      // cleaning up news
      let res = Object.keys(news).map((key) => ({
        id: Number(news[key].id),
        media: news[key].mediaUrl,
        author: news[key].author,
        timestamp: new Date(Number(news[key].timestamp) * 1000),
        votes: Number(news[key].votes),
      }));
      let cleaned = res.filter((item) => item.media !== "");
      console.log("Fetched all news from contract!");
      setAllNews(cleaned);
    } catch (error) {
      console.log(error);
    }
  };
  // **********

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

  useEffect(() => {
    getNews();
  }, []);

  return (
    <AppContext.Provider
      value={{
        address,
        client,
        allNews,
      }}
    >
      <div className="flex font-RobotoSlab bg-[#F5F2E8]">
        <NavBar />
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
