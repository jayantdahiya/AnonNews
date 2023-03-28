import contractABI from "./AnonNews.json";
import { ethers } from "ethers";

// Setting up smart contract
export const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  let contract = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_ADDRESS,
    contractABI.abi,
    signer
  );
  return contract;
};
// **********