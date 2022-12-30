import ContractAbi from "./AnonNews.json";
import { ethers } from "ethers";


function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let contract = new ethers.Contract(
    "0x0E45Ad52e69cA1f3a34c185Ed960C96E0FcafeFE",
    ContractAbi.abi,
    signer
  );
  return contract;
}

export default getContract