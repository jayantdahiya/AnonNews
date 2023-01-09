import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";


const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ apiKey: "0iAmaxqXkXu0LCsk7dxtu11lxllr6pgq" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'AnonNews',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider
      chains={chains}
      initialChain={chain.polygonMumbai}
      modalSize="compact"
      theme={darkTheme({
        overlayBlur: "small",
      })}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RainbowKitProvider>
  </WagmiConfig>
);
