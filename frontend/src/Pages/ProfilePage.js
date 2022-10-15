import React from 'react'
import {useParams} from 'react-router-dom';
import NewsCard from '../Components/NewsCard';
import profilePageBg from '../Utils/svg/profilePageBg.svg';
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
      <div className="grid min-h-screen grid-cols-4 gap-4 p-4 sm:grid-cols-1">
        <div className="col-span-4 p-4 m-10 outline-dashed">
          <div className="flex flex-col justify-start pl-16">
            <div className="inline-flex">
              <div className="text-3xl font-light">Hi 👋</div>
              <span className="p-2 text-xl font-light text-gray-900">
                {address.slice(0, 4) + " ... " + address.slice(-4)}
              </span>
            </div>
            {/* <div className='m-10'>
              <img src={profilePageBg} alt="" className="w-full h-80" />
            </div> */}
            <div className="text-xl text-gray-900">
              Here are the news posts you've posted
            </div>
          </div>
        </div>
        <div className='w-full col-span-4'>
          <NewsCard
            heading={sampleNewsHeading}
            content={sampleNewsContent}
            imageUrl={sampleImageLink}
            url="000"
          />
        </div>
        <div className='w-full col-span-4'>
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
    <div className="grid min-h-screen grid-cols-4 gap-4 p-4">
      <div className="col-span-4">
        <div className="flex flex-col justify-start mt-16 ml-16">
          <div className="text-3xl font-light">Hi 👋,</div>
          <div className="text-xl font-light">
            Connect your wallet to see your news posts
            <br />
            <span className='text-sm'>(ps: you can use the top right button 🙃)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage