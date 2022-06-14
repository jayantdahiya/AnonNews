import React from 'react';
import AnonNews from './AnonNews';
import {MoralisProvider} from 'react-moralis';

const appId = 'd0cX7Z2B2dveq9LkyGFPSAvn6ap38A853D0nnUmD';
const serverUrl = 'https://d0aulqajsczr.usemoralis.com:2053/server';

function App() {
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
     <AnonNews />
    </MoralisProvider>
  )
}

export default App;