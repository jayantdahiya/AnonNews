import React, {useContext} from 'react'
import {useParams} from 'react-router-dom';
import NewsCard from '../Components/NewsCard';
import { useAccount } from 'wagmi';

import { AppContext } from '../App';
import { ConnectButtonCustom } from '../Components/ConnectButton';

function ProfilePage() {
  const {address} = useParams();
  const { isConnected } = useAccount();
  const { allNews } = useContext(AppContext);
  // filtered allNews by address
  let filteredNews = allNews.filter((news) => news.author === address);
  console.log('Filtered News: ',filteredNews);
  if (isConnected) {
    return (
      <div className='w-full lg:w-[30vw]'>
        <div className='p-4 my-12 bordered-box'>
          <div className='text-2xl'>
            Hi, {address.substring(0, 3) + "..." + address.substring(38, 42)}
          </div>
          <div className='text-xl'>Here are the news you've posted:</div>
        </div>
        <div>
          {filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              url={news.id}
              imageUrl={news.image}
              heading={news.heading}
              content={news.content}
              author={news.author}
              timestamp={news.timestamp}
              votes={news.votes}
            />))}
        </div>
      </div>
    );
  }
  return (
    <div className="p-10 text-lg border-4 border-gray-900 border-dashed lg:text-2xl">
      Hi 👋,
      <br />
      connect your wallet to view your profile
      <div className='m-8'>
        <ConnectButtonCustom />
      </div>
    </div>
  );
}

export default ProfilePage