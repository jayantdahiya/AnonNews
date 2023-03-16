import './App.css';
import {createContext, useState} from 'react';

import NavBar from './Components/NavBar';
import News from './Pages/News';
import AboutPage from './Pages/AboutPage';
import ProfilePage from './Pages/ProfilePage';
import NewsPost from './Pages/NewsPost';
import NewNewsPost from './Pages/PostNews';
import Landing from './Pages/Landing';
import TermsOfUse from './Pages/TermsOfUse';
import getContract from './Utils/getContract';

import { ConnectButtonCustom } from './Utils/ConnectButton';
import { useAccount } from 'wagmi';

import { Routes, Route } from 'react-router-dom';

export const AppContext = createContext();

function App() {
  const { address } = useAccount();
  const [ contract, setContract ] = useState("");
  if(!contract) {
    setContract(getContract())
  }
  return (
    <AppContext.Provider
      value={{
        address,
        contract
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
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
