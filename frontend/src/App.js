import './App.css';
import {createContext, useState} from 'react';

import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import ProfilePage from './Pages/ProfilePage';

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
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile/:address" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
