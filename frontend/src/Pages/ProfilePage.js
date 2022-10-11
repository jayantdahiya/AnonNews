import React from 'react'
import {useParams} from 'react-router-dom';
import NewsCard from '../Components/NewsCard';
import {
  sampleImageLink,
  sampleNewsHeading,
  sampleNewsContent,
} from "../Utils/TestLinks";


function ProfilePage() {
  const {address} = useParams();
  console.log({address})
  if (address !== 'undefined') {
    return (
      <div>
        <NewsCard
          imageUrl={sampleImageLink}
          heading={sampleNewsHeading}
          content={sampleNewsContent}
          url="000"
        />
      </div>
    );
  } else {
    return (
      <div className='flex w-full h-screen'>
        <div className=''>
          <div className="font-light text-gray-900 text-md">
            Connect your wallet to see your posts.
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage