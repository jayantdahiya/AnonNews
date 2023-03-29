import "./App.css";

import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useAccount } from "wagmi";

import NavBar from "./Components/NavBar";
import News from "./Pages/News";
import AboutPage from "./Pages/About";
import ProfilePage from "./Pages/Profile";
import NewsPost from "./Pages/FullPost";
import PostNews from "./Pages/Post";
import Landing from "./Pages/Landing";
import TermsOfUse from "./Pages/TermsOfUse";
import { ConnectButtonCustom } from "./Components/ConnectButton";

import { getContract } from "./Utils/Contract";

export const AppContext = createContext();

function App() {
  const { address } = useAccount();
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [helpHidden, setHelpHidden] = useState(false);

  // Getting all news from smart contract
  const getNews = async () => {
    try {
      var news1 = await getContract().getAllNews();
      console.log("Fetching news from contract...");
      // cleaning up news
      let news = news1?.filter((item) => item.mediaUrl !== "");
      let res = Object.keys(news).map((key) => ({
        id: Number(news[key].id),
        media: news[key].mediaUrl,
        author: news[key].author,
        timestamp: new Date(Number(news[key].timestamp) * 1000),
        votes: Number(news[key].votes),
      }));
      console.log("News from contract: ", res);
      await GetNewsMedia(res);
      console.log("Fetched all news from contract!");
    } catch (error) {
      console.log(error);
    }
  };
  // **********

  // Getting news media from ipfs
  const GetNewsMedia = async (res) => {
    let arr = [];
    try {
      Object.keys(res).map(async (key, idx) => {
        await fetch(res[key].media)
          .then((res) => res.json())
          .then((data) => {
            console.log();
            arr.push({
              id: res[key]?.id,
              author: res[key]?.author,
              timestamp: res[key]?.timestamp,
              heading: data.headline,
              content: data.body,
              image: data.media,
              votes: res[key]?.votes,
            });
          });
        if (idx === res.length - 1) {
          console.log(arr);
          setAllNews(arr);
          setLoading(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
    return arr;
  };
  // **********

  useEffect(() => {
    getNews();
  }, []);

  return (
    <AppContext.Provider
      value={{
        address,
        allNews,
        loading,
        setLoading,
        setHelpHidden,
        helpHidden
      }}
    >
      <div className="flex min-h-screen font-RobotoSlab bg-[#F5F2E8]">
        <div className="fixed left-0 w-12 h-screen lg:w-16">
          <NavBar />
        </div>
        <div className="fixed top-3 right-3">
          <ConnectButtonCustom />
        </div>
        <div className="flex items-center justify-center p-4 pl-16 m-auto lg:ml-18 min-w-screen">
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
