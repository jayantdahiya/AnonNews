import React from 'react'
import { useNavigate } from 'react-router-dom';

function NewsCard({url, imageUrl, heading, content, author, timestamp, votes}) {
  const max_length = 500;
  console.log("NewsCard:", url, imageUrl, heading, content, author, timestamp, votes);
  const postContent = content.substring(0, max_length);
  const postAuthor = author.substring(0, 3) + "..." + author.substring(38, 42);

  const navigate = useNavigate();
  const handlePostCardClick = () => {
    if (url) {
      const postUrl = url;
      navigate(`/NewsPost/${postUrl}`);
    }
  }
  return (
    <div className="flex flex-col min-h-[60vh] mb-6 border-4 border-gray-900 border-dashed shadow-lg">
      <div className="pb-4 mt-4 text-2xl font-semibold text-center border-b-4 border-gray-900 border-dashed lg:text-3xl">
        {heading}
      </div>
      <div className="py-4 text-3xl border-b-4 border-gray-700 border-dashed">
        <img
          src={imageUrl}
          alt=""
          className="object-cover max-h-[300px] w-[90%] mx-auto"
        />
      </div>
      <div className="p-4">
        <div className="flex">
          <span className="mt-4 text-sm text-gray-400 text-md">
            <span className="font-semibold text-gray-900">Author: </span> {postAuthor}
          </span>
          <span className="mt-4 ml-auto text-sm text-right text-gray-400">
            <span className="font-semibold text-gray-900">Date: </span>{" "}
            {timestamp.toISOString().slice(0, 10)}
          </span>
        </div>
        <br />
        <div className="text-justify text-gray-400 text-md lg:text-md">
          {postContent} ...
        </div>
        <br />
        <span>
          <div className='flex'>
            <span className="text-right text-gray-400 text-md">
              <span className="font-semibold text-gray-900">Votes: </span> {votes}
            </span>
          </div>
          <div className="mt-3 text-right cursor-pointer text-md">
            <span
              className="font-semibold text-black border-gray-900 border-dashed border-y-2"
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