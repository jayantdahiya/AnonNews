import './App.css';
import {createContext, useState} from 'react';

import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import ProfilePage from './Pages/ProfilePage';
import NewsPost from './Pages/NewsPost';

import { ConnectButtonCustom } from './Utils/ConnectButton';

import { Routes, Route } from 'react-router-dom';

export const AppContext = createContext();

function App() {
  const [ walletConnected, setWalletConnected ] = useState(false);
  const [ address, setAddress ] = useState('');
  return (
    <AppContext.Provider
      value={{
        walletConnected,
        setWalletConnected,
        address,
        setAddress,
      }}
    >
      <div className="flex font-RobotoSlab bg-[#F5F2E8]">
        <NavBar />
        <div className="pl-16">
          <div className="flex justify-end mt-2 mr-4">
            <ConnectButtonCustom />
          </div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile/:address" element={<ProfilePage />} />
            <Route path="/NewsPost/:url" element={<NewsPost />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
