import { createContext, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Content from "./Pages/Content";
import { Routes, Route } from "react-router-dom";
import FullPost from "./Pages/FullPost";
import {Grid, useTheme, Theme} from '@carbon/react'
import Mission from "./Pages/Mission";

export const AppContext = createContext();

function App() {
  const {theme} = useTheme();
  const handleLatestSort = () => {
    console.log("Latest");
  }
  const handleTopVotedSort = () => {
    console.log("Top Voted");
  }
  return (
    <AppContext.Provider value={{
      theme,
      handleLatestSort,
      handleTopVotedSort
      }}>
        <Theme theme='g100'>
          <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/post" element={<FullPost />} />
        </Routes>
        </Theme>
    </AppContext.Provider>
  );
}

export default App;
