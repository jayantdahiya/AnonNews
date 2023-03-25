import React, {useContext} from 'react'
import {useParams} from 'react-router-dom';
import NewsCard from '../Components/NewsCard';
import { useAccount } from 'wagmi';

import { AppContext } from '../App';

function ProfilePage() {
  const {address} = useParams();
  const { isConnected } = useAccount();
  const { allNews } = useContext(AppContext);
  // filtered allNews by address
  let filteredNews = allNews.filter((news) => news.author === address);
  console.log(filteredNews);
  if (isConnected) {
    return (
      <div className="flex items-center w-screen min-h-screen p-4 -ml-12">
        <div className="m-auto">
          <div className="max-w-lg p-4 mx-10 lg:mx-0 outline-dashed lg:max-w-2xl">
            <div className="Justify-start">
              <div className="inline-flex">
                <div className="text-3xl font-light">Hi 👋</div>
                <span className="p-2 text-xl font-light text-gray-900">
                  {address.slice(0, 4) + " ... " + address.slice(-4)}
                </span>
              </div>
              <div className="text-lg text-gray-900 lg:text-xl">
                Here is the news you've posted
              </div>
            </div>
          </div>
          <div className="max-w-lg p-2 mx-10 mt-10 mb-10 lg:mx-0 lg:p-4 outline-dashed lg:max-w-2xl">
            <div className="w-full">
              {filteredNews.map((news) => (
                <NewsCard
                  key={news.id}
                  id={news.id}
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
        </div>
      </div>
    );
  }
  return (
    <div className="grid min-h-screen grid-cols-4 gap-4 p-4">
      <div className="col-span-4">
        <div className="flex flex-col justify-start p-4 mt-16 outline-dashed">
          <div className="text-3xl font-light">Hi 👋,</div>
          <div className="text-xl font-light">
            Connect your wallet to see your profile
            <br />
            <br />
            <span className='text-sm'>(ps: you can use the top right button 🙃)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage