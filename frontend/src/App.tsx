import { useState } from 'react'
import './App.css'
import {createContext} from 'react'
import {Routes, Route } from 'react-router-dom'

import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
import NewsPosts from './Pages/NewsPosts';
import MissionPage from './Pages/MissionPage';
import NewsView from './Pages/NewsView';

export const AppContext = createContext();

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  return (
    <AppContext.Provider value={{
      walletConnected,
      setWalletConnected
    }}>
      <NavBar />
      <Routes>
        { walletConnected ? (
          <Route path="/" element={<NewsPosts />} />
        ): (
          <Route path="/" element={<LandingPage />} />
        )}
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/newsView/:id" element={<NewsView />} />
      </Routes>
    </AppContext.Provider>
  )
}

export default App
