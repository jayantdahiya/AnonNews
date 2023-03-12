import React from 'react'
import { useNavigate } from 'react-router-dom';

function NewsCard({imageUrl, heading, content, url}) {
  const max_length = 200;
  const trimmedString = content.length > max_length ? content.substring(0, max_length - 3) + "..." : content;

  const navigate = useNavigate();
  const handlePostCardClick = () => {
    if (url) {
      const postUrl = url;
      navigate(`/NewsPost/${postUrl}`);
    }
  }
  return (
    <div className="flex flex-col max-h-[800px] max-w-[90%] m-4">
      <div className="pb-4 mt-4 text-xl font-light text-center border-b-2 border-gray-900 border-dashed lg:text-3xl">
        {heading}
      </div>
      <div className="py-4 text-3xl border-b-2 border-gray-700 border-dashed">
        <img
          src={imageUrl}
          alt=""
          className="object-cover max-h-[300px] w-[90%] mx-auto"
        />
      </div>
      <div className="p-4">
        <div className="flex">
          <span className="mt-4 text-xs text-left text-gray-400">
            <span className='text-gray-900'>Author: {" "}</span> 0x000...000
          </span>
          <span className="mt-4 ml-auto text-xs text-right text-gray-400">
            <span className='text-gray-900'>Date: {" "}</span> 00/00/0000
          </span>
        </div>
        <br />
        <div className="text-sm text-justify text-gray-500 lg:text-md">
          {trimmedString}
        </div>
        <span>
          <div className="mt-3 text-center cursor-pointer text-md">
            <span
              className="text-black border-gray-500 border-y-2"
              onClick={handlePostCardClick}
            >
              Read More
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}

export default NewsCard