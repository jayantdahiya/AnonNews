import React, { useState } from 'react';
import { AppContext } from '../App';
import Loader from '../Components/Loader';
import NewsCard from '../Components/NewsCard';
import { sampleImageLink, sampleNewsHeading, sampleNewsContent } from '../Utils/TestLinks';

function News() {
  const { allNews } = useState(AppContext);
  return (
    <>
      <div className='flex items-center w-screen min-h-screen p-4 -ml-16'>
        <div className='m-auto'>
          <div className='max-w-lg p-4 mx-10 mb-8 lg:mx-0 outline-dashed lg:max-w-xl'>
            <NewsCard imageUrl={sampleImageLink} heading={sampleNewsHeading} content={sampleNewsContent} url="1" />
          </div>
          <div className='max-w-lg p-4 mx-10 mb-8 lg:mx-0 outline-dashed lg:max-w-xl'>
            <NewsCard imageUrl={sampleImageLink} heading={sampleNewsHeading} content={sampleNewsContent} url="1" />
          </div>
          <div className='max-w-lg p-4 mx-10 mb-8 lg:mx-0 outline-dashed lg:max-w-xl'>
            <Loader size='60' />
          </div>
        </div>
      </div>
    </>
  );
}

export default News