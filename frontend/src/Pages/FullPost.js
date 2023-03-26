import React from 'react'
import { useParams } from 'react-router-dom';
import {
  sampleImageLink,
  sampleNewsHeading,
  sampleNewsContent,
} from "../Utils/TestLinks";
import { useAccount } from 'wagmi';

function NewsPost() {
  const { url } = useParams();
  const { isConnected } = useAccount();
  const handleVote = async() => {
    console.log({url});
  }
  return (
    <div className="flex items-center w-screen min-h-screen p-4">
      <div className='m-auto'>
        <div className="flex-col max-w-lg">
        <div className="p-4 text-xl font-bold text-center outline-dashed lg:text-4xl shrink">
          {sampleNewsHeading}
        </div>
        <div className="py-2 my-4 max-h-[600px]">
          <img src={sampleImageLink} alt="" className="object-cover w-full h-full lg:px-5" />
        </div>
        <div className="p-12 mb-4 outline-dashed">
          <div className="flex">
            <span className="mt-4 text-left text-gray-400 text-md">
              <span className='text-gray-900'>Date: {" "}</span> 00/00/0000
            </span>
            <span className="mt-4 ml-auto text-right text-gray-400 text-md">
              <span className='text-gray-900'>Author: {" "}</span> 0x00...0000
            </span>
          </div>
          <br />
          <div className="text-sm text-justify text-gray-700 lg:text-md">{sampleNewsContent}</div>
          <br />
          <div className='p-2 font-light border-2 border-gray-900 rounded-sm cursor-pointer w-fit hover:bg-gray-900 hover:text-gray-100' onClick={
                isConnected ? handleVote : () => alert("Please connect your wallet!")
              }>Vote this news!
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default NewsPost