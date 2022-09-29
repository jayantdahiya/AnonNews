import {ethers} from "ethers";


// function to connect the wallet
export const connectWallet = async ({address, setAddress, setWalletConnected}) => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setAddress(await signer.getAddress());
      console.log(address);
      setWalletConnected(true);
    }
  } catch (error) {
    console.log(error);
  }
};
