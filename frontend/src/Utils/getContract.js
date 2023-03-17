import ContractAbi from "./AnonNews.json";
import { ethers } from "ethers";


function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let contract = new ethers.Contract(
    `process.env.REACT_APP_CONTRACT_ADDRESS`,
    ContractAbi.abi,
    signer
  );
  return contract;
}

export default getContract