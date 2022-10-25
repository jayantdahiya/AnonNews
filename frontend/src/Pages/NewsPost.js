import React from 'react'
import { useParams } from 'react-router-dom';
import {
  sampleImageLink,
  sampleNewsHeading,
  sampleNewsContent,
} from "../Utils/TestLinks";

function NewsPost() {
  const { url } = useParams();
  const handleVote = async() => {
    console.log({url});
  }
  return (
    <div className="flex w-full p-4 lg:p-10">
      <div className="flex flex-col">
        <div className="py-4 my-4 text-xl font-bold text-center outline-dashed">
          {sampleNewsHeading}
        </div>
        <div className="py-2 my-4 max-h-[600px]">
          <img src={sampleImageLink} alt="" className="object-cover w-full h-full px-5" />
        </div>
        <div className="p-4 mb-4 outline-dashed">
          <div className="flex">
            <span className="mt-4 text-left text-gray-400 text-md">
              Author: 0x000...000
            </span>
            <span className="mt-4 ml-auto text-right text-gray-400 text-md">
              Date: 00/00/0000
            </span>
          </div>
          <br />
          <div className="text-justify text-gray-500">{sampleNewsContent}</div>
          <div className="mt-8 text-lg cursor-pointer text-start">
            <span
              className="p-2 font-light border-2 border-gray-900 rounded-sm hover:bg-gray-900 hover:text-gray-100"
              onClick={handleVote}
            >
              Vote This News!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPost