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
      <div className="pt-2 pb-3 text-3xl border-b-2 border-gray-700 border-dashed">
        <img
          src={imageUrl}
          alt=""
          className="object-cover max-h-[300px] w-[90%] mx-auto"
        />
      </div>
      <div className="pb-4 mt-4 text-2xl font-light text-center border-b-2 border-gray-700 border-dashed">
        {heading}
      </div>
      <div className="p-4">
        <div className="flex">
          <span className="mt-4 text-xs text-left text-gray-400">
            Author: 0x000...000
          </span>
          <span className="mt-4 ml-auto text-xs text-right text-gray-400">
            Date: 00/00/0000
          </span>
        </div>
        <br />
        <div className="text-justify text-gray-500">{trimmedString}</div>
        <span>
          <div className="mt-3 cursor-pointer text-end text-md">
            <span className="border-gray-500 border-y-2" onClick={handlePostCardClick}>More</span>
          </div>
        </span>
      </div>
    </div>
  );
}

export default NewsCard