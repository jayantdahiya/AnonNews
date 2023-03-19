import './App.css';
import {createContext, useState, useEffect} from 'react';

import NavBar from './Components/NavBar';
import News from './Pages/News';
import AboutPage from './Pages/AboutPage';
import ProfilePage from './Pages/ProfilePage';
import NewsPost from './Pages/FullNewsPost';
import NewNewsPost from './Pages/PostNews';
import Landing from './Pages/Landing';
import TermsOfUse from './Pages/TermsOfUse';
import GetContract from './Utils/GetContract';

import { ConnectButtonCustom } from './Utils/ConnectButton';
import { useAccount } from 'wagmi';

import { Routes, Route } from 'react-router-dom';
import TestingIPFS from './TestingIPFS';

import { create } from 'ipfs-http-client';
import { Buffer } from 'buffer';

export const AppContext = createContext();

function App() {
  const { address } = useAccount();
  const [allNews, setAllNews] = useState([]);
  const [contract, setContract] = useState("");


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


  return (
    <AppContext.Provider
      value={{
        address,
        contract,
        client,
        allNews,
        setAllNews,
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
            <Route path="/newNewsPost" element={<NewNewsPost />} />
            <Route path="/profile/:address" element={<ProfilePage />} />
            <Route path="/NewsPost/:url" element={<NewsPost />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path='/ipfs' element={<TestingIPFS />} />
            <Route path='/contract' element={<GetContract />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
