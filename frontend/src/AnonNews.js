import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Posts from './Components/Posts';
import PostButton from './Components/PostField';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import abi from './utils/AnonNews.json';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';
import {create as ipfsHttpClient } from 'ipfs-http-client';
import {Backdrop} from '@mui/material';
import {CircularProgress} from '@mui/material';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

export const AppContext = createContext();

const theme1 = createTheme({
  palette: {
    primary: {
      main: '#000000',
      // main: grey[200],
    },
    secondary: {
      main: '#F6D623',
      // main: green[400],
    },
  },
});


function AnonNews() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);

  const [loader, setLoader] = useState(false);
  // const [open, setOpen] = useState(false);
  const handleClose = () => {
    // setOpen(false);
    setLoader(false);
  };


  // const contractAddress = "0x96c016966aA78eA7A9fA3bF23E6aEe11095Eb7Fe";
  const contractAddress = "0x1401D173802540a7c850418A8cf3379B744DA781";
  const contractABI = abi.abi;
  const {ethereum} = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const anonNewsContract = new ethers.Contract(contractAddress, contractABI, signer);

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
        window.location.reload(false);
        alert('Wallet connected!')
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
      alert('Wallet not connected. Please try again.')
    }
  }

  const getAllPosts = async () => {
    try {
      const {ethereum} = window;
      if(ethereum){
        const posts = await anonNewsContract.getAllPosts();
        let postsCleaned = [];
        posts.forEach(post => {
          postsCleaned.push({
            id: post.id,
            address: post.author,
            news: post.postText,
            media: post.mediaUrl,
            votes: post.votes,
            timestamp: new Date(post.timestamp * 1000),
          })
        });
        // postsCleaned.sort((a,b)=> b.timestamp.valueOf() - a.timestamp.valueOf());
        postsCleaned.sort((a,b)=> b.votes - a.votes);
        setAllPosts(postsCleaned);
        console.log(allPosts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const votePost = async (post) => {
    try {
      setLoader(true)
      await (await anonNewsContract.postVote(post.id, {value: ethers.utils.parseEther("0.001")})).wait()
      getAllPosts();
      alert('Sucessfully voted!')
      setLoader(false);
      window.location.reload(false);

    } catch (error) {
      console.log(error);
      alert(error.reason);
    }
  }
  
  useEffect(() => {
    checkIfWalletIsConnected();
    getAllPosts();
  }, [])

  return (
    <ThemeProvider theme={theme1}>
    <AppContext.Provider value={{
      theme1,
      contractAddress,
      contractABI,
      allPosts,
      currentAccount,
      setCurrentAccount,
      walletConnected,
      setWalletConnected,
      connectWallet,
      getAllPosts,
      client,
      votePost
    }}>
    <div className='mainPage'>

    <Nav />

    
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loader}
      onClick={handleClose}
      >
        <CircularProgress color='inherit' />
    </Backdrop>
    

    <div>
    {!walletConnected && (
      <div className='walletError'>
        <Typography variant='h6'>Connect your Ethereum wallet to continue!</Typography>
      </div>
    )}
    </div>


      <div className='postsSection'>
        <Posts />
      </div>
      

     <PostButton />

     </div>

    </AppContext.Provider>
    </ThemeProvider>
  );
}

export default AnonNews;
