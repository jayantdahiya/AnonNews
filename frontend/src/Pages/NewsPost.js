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
    <div className="flex w-full p-10">
      <div className="flex flex-col m-4">
        <div className="py-4 mt-4 text-2xl font-light text-center border-gray-400 border-y-2">
          {sampleNewsHeading}
        </div>
        <div className="py-2 pb-3 text-3xl border-b-2 border-gray-400">
          <img
            src={sampleImageLink}
            alt=""
            className="object-cover max-h-fit w-[90%] mx-auto"
          />
        </div>
        <div className="p-4">
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
              className="p-2 font-light border-2 border-gray-500 rounded-sm hover:bg-gray-900 hover:text-gray-100"
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