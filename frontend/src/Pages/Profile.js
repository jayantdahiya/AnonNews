import React, {useContext} from 'react'
import {useParams} from 'react-router-dom';
import NewsCard from '../Components/NewsCard';
import { useAccount } from 'wagmi';

import { AppContext } from '../App';
import { ConnectButtonCustom } from '../Components/ConnectButton';

function ProfilePage() {
  const { isConnected, address } = useAccount();
  const { allNews } = useContext(AppContext);
  // filtered allNews by address
  let filteredNews = allNews.filter((news) => news.author === address);
  // console.log('Filtered News: ',filteredNews.length);
  if (isConnected) {
    if (filteredNews.length === 0) {
      return (
        <div className="w-full lg:w-[30vw]">
          <div className="p-4 my-12 space-y-4 bordered-box">
            <div className="text-2xl">
              Hi, {address.substring(0, 3) + "..." + address.substring(38, 42)}
            </div>
            <div className="text-xl">
              You haven't posted any news yet. 😕
              <br />
              Something you want to share?
            </div>
            <button
              className="p-2 cursor-pointer bordered-box hover:text-gray-200 hover:bg-gray-900"
              onClick={() => (window.location.href = "/post")}
            >
              Post here!
            </button>
          </div>
        </div>
      ); 
    } else {
      return (
        <div className="w-full lg:w-[30vw]">
          <div className="p-4 my-12 bordered-box">
            <div className="text-2xl">
              Hi, {address.substring(0, 3) + "..." + address.substring(38, 42)}
            </div>
            <div className="text-xl">Here are the news you've posted:</div>
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
              />
            ))}
          </div>
        </div>
      );
    }
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