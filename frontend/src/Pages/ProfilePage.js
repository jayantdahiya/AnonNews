import React from 'react'
import {useParams} from 'react-router-dom';
import NewsCard from '../Components/NewsCard';
import {
  sampleImageLink,
  sampleNewsHeading,
  sampleNewsContent,
} from "../Utils/TestLinks";
import { useAccount } from 'wagmi';


function ProfilePage() {
  const {address} = useParams();
  const {isConnected} = useAccount();
  console.log(address)
  if (isConnected) {
    return (
      <div className="grid min-h-screen grid-cols-4 gap-4">
        <div className="col-span-4">
          <div className="flex flex-col justify-start pl-16">
            <div className="inline-flex">
              <div className="text-3xl font-light">Hi 👋</div>
              <span className="p-2 text-xl font-light text-gray-600">
                {address.slice(0, 4) + "..." + address.slice(-4)}
              </span>
            </div>
            <div className="text-xl font-light">
              Here are the news posts you've posted
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <NewsCard
            heading={sampleNewsHeading}
            content={sampleNewsContent}
            imageUrl={sampleImageLink}
            url="000"
          />
        </div>
        <div className="col-span-2">
          <NewsCard
            heading={sampleNewsHeading}
            content={sampleNewsContent}
            imageUrl={sampleImageLink}
            url="000"
          />
        </div>
      </div>
    );
  }
  return (
      <div className="grid min-h-screen grid-cols-4 gap-4">
        <div className="col-span-4">
          <div className="flex flex-col justify-start mt-16 ml-16">
            <div className="text-3xl font-light">Hi 👋,</div>
            <div className="text-xl font-light">
              Connect your wallet to see your news posts
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProfilePage