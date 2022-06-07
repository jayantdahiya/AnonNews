import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import CssBaseline from '@mui/material/CssBaseline';
import Posts from './Components/Posts';
import PostButton from './Components/PostField';
import { createContext } from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import abi from './utils/AnonNews.json';

export const AppContext = createContext();


function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);

  const contractAddress = "0xfE18dE8f84E4dE88b656063503FA61954EC4C959";
  const contractABI = abi.abi;

  const [allPosts, setAllPosts ] = useState([]);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
        setWalletConnected(true);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const anonNewsContract = new ethers.Contract(contractAddress, contractABI, signer);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getAllPosts = async () => {
    try {
      const {ethereum} = window;
      if(ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const anonNewsContract = new ethers.Contract(contractAddress, contractABI, signer);

        const posts = await anonNewsContract.getAllPosts();

        let postsCleaned = [];
        posts.forEach(post => {
          postsCleaned.push({
            address: post.voter,
            timestamp: new Date(post.timestamp * 1000),
            news: post.message
          })
        });
        postsCleaned.sort((a,b)=> b.timestamp.valueOf() - a.timestamp.valueOf());
        setAllPosts(postsCleaned);
        console.log(allPosts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AppContext.Provider value={{
      currentAccount,
      setCurrentAccount,
      walletConnected,
      setWalletConnected,
      connectWallet,
      getAllPosts
    }}>
    <CssBaseline>
    <div className='navBar'>
      <Nav />
    </div>
    <div className='postsSection'>
      <Posts />
     </div>
     <PostButton />
    </CssBaseline>
    </AppContext.Provider>
  );
}

export default App;
