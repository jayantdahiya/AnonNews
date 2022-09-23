import {useContext} from 'react'
import { AppContext } from '../App';
import WalletConnectProvider from "@walletconnect/web3-provider";
import {providers} from 'ethers';

function NavBar() {
  const provider = new WalletConnectProvider({
    infuraId: '2AbkhqrlUwPBPOGbEnKl2NS5n4M'
  });
  const connectWallet = async () => {
    try {
      await provider.enable();
      const web3Provider = new providers.Web3Provider(provider);
      console.log(web3Provider);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={connectWallet}>
        Connect Wallet
      </button>
    </div>
  )
}

export default NavBar