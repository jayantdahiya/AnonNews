import React, { useContext } from 'react'
import { AppContext } from '../App';
import PostButton from '../Components/PostButton';
import Posts from '../Components/Posts';

function Content() {
  const { walletConnected} = useContext(AppContext);
  console.log(walletConnected)
  return (
    <div>
      {walletConnected ? (
        <div class="hero min-h-screen bg-base-300">
          <div class="hero-content">
            <div class="max-w-md">
              <Posts />
              <PostButton />
            </div>
          </div>
        </div>
      ) : (
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-5xl font-bold text-primary">Hello there</h1>
              <p class="py-6">
                To start using this DAPP you'll need to connect your MetaMask
                Wallet and switch to Rinkeby Testnet
              </p>
              <p class="py-6 text-primary text-lg">
                Get Started by clicking on the connect wallet button on the
                navbar &#128070;
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content