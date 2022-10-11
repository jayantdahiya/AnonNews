import './App.css';
import {createContext} from 'react';

import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import ProfilePage from './Pages/ProfilePage';
import NewsPost from './Pages/NewsPost';
import NewNewsPost from './Pages/NewNewsPost';

import { ConnectButtonCustom } from './Utils/ConnectButton';
import { useAccount } from 'wagmi';

import { Routes, Route } from 'react-router-dom';

export const AppContext = createContext();

function App() {
  const { address } = useAccount();
  return (
    <AppContext.Provider
      value={{
        address,
      }}
    >
      <div className="flex font-RobotoSlab bg-[#F5F2E8]">
        <NavBar />
        <div className="fixed top-3 right-3">
          <ConnectButtonCustom />
        </div>
        <div className="mt-16 ml-16">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/newNewsPost" element={<NewNewsPost />} />
            <Route path="/profile/:address" element={<ProfilePage />} />
            <Route path="/NewsPost/:url" element={<NewsPost />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
